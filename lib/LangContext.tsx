"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "@/content/translations";

const STORAGE_KEY = "rts-portfolio-lang";

// Store externo mínimo (fora do React) pra guardar o idioma atual, lido e
// persistido no localStorage, igual ao script.js original. Usar
// useSyncExternalStore evita o padrão "setState dentro de um effect" e
// resolve a divergência servidor/cliente automaticamente: o React usa
// getServerSnapshot na renderização do servidor e na primeira passada no
// cliente (hidratação), depois troca para getSnapshot (valor real do
// localStorage) sem mismatch de hidratação.

let cachedLang: Lang | null = null;
const listeners = new Set<() => void>();

function readStoredLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    // storage indisponível (modo privado, etc.), cai no padrão abaixo
  }
  return "pt";
}

function getSnapshot(): Lang {
  if (cachedLang === null) {
    cachedLang = readStoredLang();
  }
  return cachedLang;
}

function getServerSnapshot(): Lang {
  return "pt";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setStoredLang(lang: Lang) {
  cachedLang = lang;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignora, mesmo comportamento do script.js original
  }
  listeners.forEach((listener) => listener());
}

type LangContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
};

const LangContext = createContext<LangContextValue | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const toggleLang = useCallback(() => {
    setStoredLang(lang === "pt" ? "en" : "pt");
  }, [lang]);

  const t = useCallback((key: TranslationKey) => translations[lang][key], [lang]);

  return <LangContext.Provider value={{ lang, toggleLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang precisa ser usado dentro de um LangProvider");
  return ctx;
}

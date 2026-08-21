"use client";

import { useLang } from "@/lib/LangContext";

export default function LangToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      className="lang-toggle"
      id="langToggle"
      aria-label="Trocar idioma / Switch language"
      onClick={toggleLang}
    >
      <span className={`lang-opt${lang === "pt" ? " is-active" : ""}`} data-lang-opt="pt">
        PT
      </span>
      <span className="lang-sep">/</span>
      <span className={`lang-opt${lang === "en" ? " is-active" : ""}`} data-lang-opt="en">
        EN
      </span>
    </button>
  );
}

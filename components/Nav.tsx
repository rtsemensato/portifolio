"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import LangToggle from "./LangToggle";

export default function Nav() {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`nav${isOpen ? " is-open" : ""}`} id="nav">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label="Ricardo Teston Semensato">
          RTS<span className="nav-logo-dot">.</span>
        </a>

        <nav className="nav-links" id="navLinks">
          <a href="#about" onClick={closeMenu}>
            {t("nav.about")}
          </a>
          <a href="#experience" onClick={closeMenu}>
            {t("nav.experience")}
          </a>
          <a href="#stack" onClick={closeMenu}>
            {t("nav.stack")}
          </a>
          <a href="#projects" onClick={closeMenu}>
            {t("nav.projects")}
          </a>
          <a href="#contact" onClick={closeMenu}>
            {t("nav.contact")}
          </a>
        </nav>

        <div className="nav-actions">
          <LangToggle />
          <button
            className="nav-burger"
            id="navBurger"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

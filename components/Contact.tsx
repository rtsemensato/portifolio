"use client";

import { useLang } from "@/lib/LangContext";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLang();

  return (
    <Reveal as="section" className="section section-contact" id="contact">
      <div className="wrap">
        <p className="eyebrow">{t("contact.eyebrow")}</p>
        <h2>{t("contact.title")}</h2>
        <p className="section-sub">{t("contact.sub")}</p>

        <div className="contact-grid">
          <a className="contact-item" href="mailto:rtestonsemensato@gmail.com">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <span>rtestonsemensato@gmail.com</span>
          </a>
          <a className="contact-item" href="tel:+5543998012166">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.1z" />
            </svg>
            <span>+55 (43) 99801-2166</span>
          </a>
          <a
            className="contact-item"
            href="https://www.linkedin.com/in/ricardosemensato-dev"
            target="_blank"
            rel="noopener"
          >
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
              <path d="M10 9v12" />
              <path d="M10 13a4 4 0 0 1 8 0v8" />
            </svg>
            <span>linkedin.com/in/ricardosemensato-dev</span>
          </a>
          <div className="contact-item contact-item-static">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{t("contact.location")}</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

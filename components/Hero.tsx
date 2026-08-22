"use client";

import { useLang } from "@/lib/LangContext";
import Reveal from "./Reveal";
import StatStrip from "./StatStrip";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="hero">
      <Reveal as="div" className="wrap hero-inner">
        <p className="eyebrow">{t("hero.eyebrow")}</p>
        <h1 className="hero-name">Ricardo Teston Semensato</h1>
        <p className="hero-role">{t("hero.role")}</p>
        <p className="hero-lede">{t("hero.lede")}</p>

        <div className="cta-row">
          <a className="btn btn-primary" href="mailto:rtestonsemensato@gmail.com">
            {t("hero.ctaEmail")}
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/ricardosemensato-dev"
            target="_blank"
            rel="noopener"
          >
            LinkedIn ↗
          </a>
        </div>

        <StatStrip />
      </Reveal>
    </section>
  );
}

"use client";

import { useLang } from "@/lib/LangContext";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLang();

  return (
    <Reveal as="section" className="section" id="about">
      <div className="wrap">
        <p className="eyebrow">{t("about.eyebrow")}</p>
        <h2>{t("about.title")}</h2>
        <div className="about-grid">
          <p className="about-text">{t("about.p1")}</p>
          <p className="about-text">{t("about.p2")}</p>
        </div>
      </div>
    </Reveal>
  );
}

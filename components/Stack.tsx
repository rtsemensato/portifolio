"use client";

import { useLang } from "@/lib/LangContext";
import Reveal from "./Reveal";
import { stack } from "@/content/stack";

export default function Stack() {
  const { t } = useLang();

  return (
    <Reveal as="section" className="section" id="stack">
      <div className="wrap">
        <p className="eyebrow">{t("stack.eyebrow")}</p>
        <h2>{t("stack.title")}</h2>
        <p className="section-sub">{t("stack.sub")}</p>

        <div className="stack-grid">
          {stack.map((category) => (
            <div className="stack-card" key={category.titleKey}>
              <h3>{t(category.titleKey)}</h3>
              <div className="tag-row">
                {category.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {category.noteKey && <p className="stack-note">{t(category.noteKey)}</p>}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

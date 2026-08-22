"use client";

import { useLang } from "@/lib/LangContext";
import Reveal from "./Reveal";
import { stackGroups } from "@/content/stack";

export default function Stack() {
  const { t } = useLang();

  return (
    <Reveal as="section" className="section" id="stack">
      <div className="wrap">
        <p className="eyebrow">{t("stack.eyebrow")}</p>
        <h2>{t("stack.title")}</h2>
        <p className="section-sub">{t("stack.sub")}</p>

        {stackGroups.map((group) => (
          <div className="stack-group" key={group.titleKey}>
            <h3 className="stack-group-title">{t(group.titleKey)}</h3>
            {group.noteKey && <p className="stack-group-note">{t(group.noteKey)}</p>}

            <div className="stack-grid">
              {group.categories.map((category) => (
                <div className="stack-card" key={category.titleKey}>
                  <h4>{t(category.titleKey)}</h4>
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
        ))}
      </div>
    </Reveal>
  );
}

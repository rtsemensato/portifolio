"use client";

import { useLang } from "@/lib/LangContext";
import Reveal from "./Reveal";
import { experience } from "@/content/experience";

export default function Experience() {
  const { t } = useLang();

  return (
    <Reveal as="section" className="section" id="experience">
      <div className="wrap">
        <p className="eyebrow">{t("exp.eyebrow")}</p>
        <h2>{t("exp.title")}</h2>

        <ol className="timeline">
          {experience.map((entry) => (
            <li className="timeline-item" key={entry.company}>
              <div className="timeline-date">
                {entry.startYear} — {entry.endYear ?? t("exp.present")}
              </div>
              <div className="timeline-body">
                <h3>{entry.company}</h3>
                <p className="timeline-role">{t(entry.roleKey)}</p>
                <ul>
                  {entry.bulletKeys.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {entry.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {entry.resultKey && <p className="timeline-result">{t(entry.resultKey)}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}

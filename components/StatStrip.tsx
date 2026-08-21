"use client";

import { useLang } from "@/lib/LangContext";
import type { TranslationKey } from "@/content/translations";

type Stat = {
  dot: "amber" | "teal";
  /** Número já formatado, exatamente como no reference/ (não é traduzido). */
  num: string;
  labelKey: TranslationKey;
};

const stats: Stat[] = [
  { dot: "amber", num: "10+", labelKey: "stat.years" },
  { dot: "teal", num: "3", labelKey: "stat.companies" },
  { dot: "amber", num: "3.000+", labelKey: "stat.users" },
  { dot: "teal", num: "+30%", labelKey: "stat.productivity" },
];

export default function StatStrip() {
  const { t } = useLang();

  return (
    <div className="stat-strip">
      {stats.map((stat) => (
        <div className="stat" key={stat.labelKey}>
          <span className={`dot dot-${stat.dot}`}></span>
          <span className="stat-num">{stat.num}</span>
          <span className="stat-label">{t(stat.labelKey)}</span>
        </div>
      ))}
    </div>
  );
}

import type { TranslationKey } from "./translations";

export type ExperienceEntry = {
  /** Nome da empresa. Não é traduzido, aparece igual em PT e EN. */
  company: string;
  startYear: string;
  /** null = trabalho atual (usa a tradução "exp.present" no lugar do ano final). */
  endYear: string | null;
  roleKey: TranslationKey;
  bulletKeys: TranslationKey[];
  resultKey?: TranslationKey;
  /** Tags de tecnologia, exatamente como agrupadas no reference/ (ex: "Java · Spring Boot" é uma tag só). */
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Gelic Tecnologia",
    startYear: "2025",
    endYear: null,
    roleKey: "exp.gelic.role",
    bulletKeys: ["exp.gelic.b1", "exp.gelic.b2", "exp.gelic.b3", "exp.gelic.b4", "exp.gelic.b5"],
    tags: ["React", "Vite", "TypeScript", "React Query", "Storybook", ".NET Core"],
  },
  {
    company: "Hap Tecnologia",
    startYear: "2023",
    endYear: "2025",
    roleKey: "exp.hap.role",
    bulletKeys: ["exp.hap.b1", "exp.hap.b2", "exp.hap.b3", "exp.hap.b4", "exp.hap.b5"],
    resultKey: "exp.hap.result",
    tags: ["Next.js", "Node.js", "WebSockets", "Pagar.me", "Docker", "Jenkins"],
  },
  {
    company: "JD3 Software",
    startYear: "2015",
    endYear: "2023",
    roleKey: "exp.jd3.role",
    bulletKeys: ["exp.jd3.b1", "exp.jd3.b2", "exp.jd3.b3", "exp.jd3.b4"],
    tags: [".NET · C#", "Delphi", "SQL Server", "AWS S3"],
  },
];

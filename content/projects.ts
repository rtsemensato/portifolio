import type { TranslationKey } from "./translations";

export type Project = {
  slug: string;
  /** Nome do projeto. Não é traduzido, aparece igual em PT e EN. */
  title: string;
  subtitleKey: TranslationKey;
  descriptionKey: TranslationKey;
  tags: string[];
  isPrivate: boolean;
  /**
   * URL do repositório, só deve existir quando isPrivate = false.
   * Furafila e ObraLog são privados: nunca preencher repoUrl para eles
   * (brief, seção 2, regra 5). Nenhum componente ainda renderiza este
   * campo: é só o gancho para um projeto público futuro.
   */
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "furafila",
    title: "Furafila",
    subtitleKey: "proj.furafila.sub",
    descriptionKey: "proj.furafila.desc",
    tags: [".NET 9", "EF Core", "React 19", "Mercado Pago", "SignalR", "Testcontainers"],
    isPrivate: true,
  },
  {
    slug: "obralog",
    title: "ObraLog",
    subtitleKey: "proj.obralog.sub",
    descriptionKey: "proj.obralog.desc",
    tags: ["React Native", "Expo", "SQLite", ".NET 9", "Offline-first"],
    isPrivate: true,
  },
];

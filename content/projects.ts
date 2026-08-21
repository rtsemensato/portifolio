import type { TranslationKey } from "./translations";

export type Project = {
  slug: string;
  /** Nome do projeto. Não é traduzido, aparece igual em PT e EN. */
  title: string;
  subtitleKey: TranslationKey;
  descriptionKey: TranslationKey;
  tags: string[];
  isPrivate: boolean;
  /** URL do repositório. Só deve existir quando isPrivate = false. */
  repoUrl?: string;
  /** URL do app hospedado, quando houver uma demo rodando. */
  liveUrl?: string;
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
  {
    slug: "kanban",
    title: "Kanban",
    subtitleKey: "proj.kanban.sub",
    descriptionKey: "proj.kanban.desc",
    tags: ["Vue 3", "Pinia", "TypeScript", "Vite"],
    isPrivate: false,
    repoUrl: "https://github.com/rtsemensato/kanban-vue",
    liveUrl: "https://kanban-vue-seven.vercel.app",
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    subtitleKey: "proj.taskmanager.sub",
    descriptionKey: "proj.taskmanager.desc",
    tags: ["Angular", "FastAPI", "SQLAlchemy", "JWT"],
    isPrivate: false,
    repoUrl: "https://github.com/rtsemensato/task-manager",
    liveUrl: "https://task-manager-pi-brown.vercel.app",
  },
  {
    slug: "ui-kit",
    title: "UI Kit",
    subtitleKey: "proj.uikit.sub",
    descriptionKey: "proj.uikit.desc",
    tags: ["React", "TypeScript", "Storybook", "Vitest"],
    isPrivate: false,
    repoUrl: "https://github.com/rtsemensato/ui-kit",
    liveUrl: "https://ui-kit-ochre.vercel.app",
  },
];

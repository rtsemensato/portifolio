import type { TranslationKey } from "./translations";

export type StackCategory = {
  titleKey: TranslationKey;
  /** Nomes de tecnologia não são traduzidos, aparecem iguais em PT e EN. */
  tags: string[];
  noteKey?: TranslationKey;
};

export type StackGroup = {
  titleKey: TranslationKey;
  noteKey?: TranslationKey;
  categories: StackCategory[];
};

export const stackGroups: StackGroup[] = [
  {
    titleKey: "stack.group.work",
    categories: [
      {
        titleKey: "stack.frontend",
        tags: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript (ES6+)",
          "React Query",
          "Zustand",
          "React Hook Form",
          "Zod / Yup",
          "Recharts",
          "Chart.js",
          "Storybook",
        ],
      },
      {
        titleKey: "stack.backend",
        tags: ["Node.js", "Express", ".NET / .NET 9", "C#", "Entity Framework"],
      },
      {
        titleKey: "stack.data",
        tags: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"],
      },
      {
        titleKey: "stack.realtime",
        tags: ["WebSockets", "SignalR", "RabbitMQ", "Mercado Pago", "Pagar.me", "OAuth2"],
      },
      {
        titleKey: "stack.testing",
        tags: ["Vitest", "Jest", "Playwright", "React Testing Library"],
      },
      {
        titleKey: "stack.devops",
        tags: ["Git", "Docker", "Docker Compose", "Jenkins", "GitHub Actions", "AWS S3"],
      },
      {
        titleKey: "stack.ai",
        tags: ["Claude", "Cursor", "ChatGPT"],
        noteKey: "stack.aiNote",
      },
    ],
  },
  {
    titleKey: "stack.group.personal",
    noteKey: "stack.group.personalNote",
    categories: [
      {
        titleKey: "stack.backend",
        tags: ["PHP", "Laravel", "Go", "NestJS", "FastAPI", "SQLAlchemy", "Prisma", "JWT"],
      },
      {
        titleKey: "stack.frontend",
        tags: ["Vue 3", "Pinia", "Angular", "Vite", "Leaflet"],
      },
      {
        titleKey: "stack.mobile",
        tags: ["React Native", "Expo", "SQLite"],
      },
      {
        titleKey: "stack.testing",
        tags: ["Testcontainers"],
      },
    ],
  },
];

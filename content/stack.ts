import type { TranslationKey } from "./translations";

export type StackCategory = {
  titleKey: TranslationKey;
  /** Nomes de tecnologia não são traduzidos, aparecem iguais em PT e EN. */
  tags: string[];
  noteKey?: TranslationKey;
};

export const stack: StackCategory[] = [
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
    tags: ["Node.js", "Express", ".NET / .NET 9", "C#", "Entity Framework", "Java 17", "Spring Boot"],
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
];

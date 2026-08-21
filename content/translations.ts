// Dicionário de traduções PT/EN, portado literalmente de reference/script.js.
//
// Uma única alteração de conteúdo em relação ao reference/ original: em
// "contact.location" o travessão médio de frase foi trocado por ponto final
// (decisão confirmada com o Ricardo, ver brief seção 2 regra 4). Título e
// datas da timeline mantêm o travessão original, pois funcionam como
// separador/intervalo, não como travessão em meio de frase.

export const translations = {
  pt: {
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.stack": "Stack",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    "hero.eyebrow": "// desenvolvedor full stack",
    "hero.role": "Engenheiro de Software · Front-End & Full Stack",
    "hero.lede":
      "Construo interfaces e sistemas que continuam de pé bem depois do deploy. 10+ anos entre front-end, arquitetura e integrações que precisam funcionar de verdade.",
    "hero.status": "Disponível para novas oportunidades",
    "hero.ctaEmail": "Enviar e-mail",

    "stat.years": "anos de experiência",
    "stat.companies": "empresas",
    "stat.users": "usuários em produção",
    "stat.productivity": "ganho de produtividade de equipe",

    "about.eyebrow": "// sobre",
    "about.title": "Como eu trabalho",
    "about.p1":
      "Sou desenvolvedor full stack há mais de 10 anos, com raiz forte em front-end (React, TypeScript, Next.js) e trânsito real em back-end (.NET, Node.js, Java/Spring Boot). Passei a maior parte da carreira em times pequenos e enxutos, o que significa que aprendi a fazer de tudo um pouco: arquitetura, decisões técnicas, deploy, e também sentar do lado do usuário final pra entender se o sistema resolve o problema dele de verdade.",
    "about.p2":
      "Gosto de pegar código legado e transformar em algo sustentável, e de construir do zero quando é isso que o projeto pede. Uso IA (Claude, Cursor) como parte do meu fluxo de trabalho todos os dias, sempre revisando e validando o que é gerado, porque quem assina o código sou eu.",

    "exp.eyebrow": "// experiência",
    "exp.title": "Trajetória",
    "exp.present": "atual",
    "exp.gelic.role": "Desenvolvedor Front-End Sênior",
    "exp.gelic.b1":
      "Arquitetura e desenvolvimento do front-end de um sistema de cotações para o setor automotivo, construído do zero com React, Vite e TypeScript",
    "exp.gelic.b2": "Design System criado do zero: componentes, padrões e documentação em Storybook",
    "exp.gelic.b3":
      "React Query para data fetching com cache por entidade; formulários complexos com React Hook Form + Zod/Yup",
    "exp.gelic.b4":
      "Migração de autenticação para cookies HttpOnly com camada BFF própria, reduzindo exposição a XSS/CSRF",
    "exp.gelic.b5": "Principal referência técnica de front-end do time; ajustes pontuais em .NET Core",

    "exp.hap.role": "Líder Técnico de Engenharia de Software",
    "exp.hap.b1":
      "Único desenvolvedor nos primeiros meses do projeto, responsável por arquitetura, front-end e decisões de produto",
    "exp.hap.b2":
      "Sistema PWA integrado ao ERP com comunicação em tempo real via WebSockets entre garçom e cozinha",
    "exp.hap.b3": "Integração de pagamentos com a Pagar.me construída do zero, cobrindo o fluxo completo de cobrança",
    "exp.hap.b4": "APIs REST com Node.js e Express; CI/CD com Jenkins, Docker e Kubernetes",
    "exp.hap.b5": "Evolução para liderança técnica: mentoria, code review e adoção de práticas ágeis",
    "exp.hap.result": "Resultado: +30% de produtividade da equipe · −50% no tempo de onboarding",

    "exp.jd3.role": "Júnior → Pleno → Sênior · 8 anos",
    "exp.jd3.b1": "Trajetória completa dentro da mesma empresa, boa parte do período como único desenvolvedor",
    "exp.jd3.b2":
      "Modernização de ERP legado (Delphi/SQL Server) migrando módulos para Java 17 + Spring Boot e .NET/C#",
    "exp.jd3.b3": "Validação de usabilidade presencial com usuários finais de sistemas de ERP, PCP e WMS",
    "exp.jd3.b4": "Aplicativo desenvolvido adotado por mais de 3.000 usuários, com menos de 5% de defeitos pós-lançamento",

    "stack.eyebrow": "// stack",
    "stack.title": "Tecnologias que uso de verdade",
    "stack.sub": "Sem lista inflada. Só o que eu efetivamente uso ou já usei em produção.",
    "stack.frontend": "Front-end",
    "stack.backend": "Back-end",
    "stack.data": "Dados",
    "stack.realtime": "Tempo real & integrações",
    "stack.testing": "Testes",
    "stack.devops": "DevOps & infra",
    "stack.ai": "IA aplicada",
    "stack.aiNote": "Engenharia assistida por IA, com revisão técnica humana em cada linha.",

    "proj.eyebrow": "// projetos pessoais",
    "proj.title": "Projetos pessoais",
    "proj.private": "Repositório privado",
    "proj.furafila.sub": "Sistema de pedidos para eventos com barracas",
    "proj.furafila.desc":
      "Do escaneamento do QR code ao ticket final. Backend em .NET 9, monólito modular com EF Core, FluentValidation e Serilog, e PWA em React 19. Integração completa com a Orders API do Mercado Pago (Pix, cartão e balcão), cada fluxo com sua própria validação de webhook via HMAC. Notificações em tempo real com SignalR e Web Push, testes de integração com Testcontainers.",
    "proj.obralog.sub": "App de medições e diário de obra, offline-first",
    "proj.obralog.desc":
      "React Native com Expo e SQLite local: toda escrita é salva primeiro no dispositivo, sem esperar rede. Sincronização bidirecional com o backend, incluindo resolução de conflitos e upload de fotos. Backend em .NET 9 Minimal APIs + EF Core, atuando como intermediário para um sistema de terceiro.",
    "proj.kanban.sub": "Quadro Kanban com drag-and-drop",
    "proj.kanban.desc":
      "Colunas fixas de A fazer, Fazendo e Feito, cartões com título e descrição, arrastar e soltar nativo via HTML5 Drag and Drop API. Persistência local no navegador, sem backend. Feito em Vue 3 com Composition API e Pinia para gerenciamento de estado.",
    "proj.taskmanager.sub": "Gerenciador de tarefas com autenticação JWT",
    "proj.taskmanager.desc":
      "Cadastro e login com senha hasheada em bcrypt, tokens JWT, CRUD de tarefas isolado por usuário. Front-end em Angular com standalone components, signals e forms reativos; back-end em FastAPI com SQLAlchemy. Testes automatizados cobrindo autenticação e as rotas de tarefas.",
    "proj.uikit.sub": "Biblioteca de componentes React documentada com Storybook",
    "proj.uikit.desc":
      "12 componentes acessíveis e testados: Button, Input, Select, Modal, Toast, Card, Badge, Tabs, Tooltip, Accordion, Skeleton e FormField com React Hook Form + Zod. CSS Modules com os mesmos design tokens deste portfólio, testes unitários com Vitest e Testing Library, e testes de interação em navegador real via Storybook.",
    "proj.pomodoro.sub": "Pomodoro com gamificação e desafios de pausa ativa",
    "proj.pomodoro.desc":
      "Ciclos de foco de 25 minutos que rendem experiência e, ao final de cada ciclo, sorteiam um desafio de alongamento corporal ou descanso visual. Completar desafios sobe de nível. Estado (nível, xp, desafios completados) persistido em cookies, lidos no servidor via getServerSideProps. Adaptado a partir do projeto Move.it, construído numa Next Level Week da Rocketseat.",
    "proj.viewCode": "Ver código",
    "proj.viewLive": "Ver ao vivo",
    "proj.note": "Furafila e ObraLog têm repositório privado, mas posso mostrar o código em uma conversa.",

    "contact.eyebrow": "// contato",
    "contact.title": "Vamos conversar",
    "contact.sub":
      "Aberto a oportunidades remotas, PJ ou CLT, em times que valorizam arquitetura bem pensada e código que dura.",
    "contact.location": "Jandaia do Sul, PR. Disponível para remoto",

    "footer.note": "Currículo adaptado sob pedido, conforme a vaga.",
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.stack": "Stack",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.eyebrow": "// full stack developer",
    "hero.role": "Software Engineer · Front-End & Full Stack",
    "hero.lede":
      "I build interfaces and systems that keep running well after launch day. 10+ years across front-end, architecture and integrations that need to actually work.",
    "hero.status": "Open to new opportunities",
    "hero.ctaEmail": "Send an email",

    "stat.years": "years of experience",
    "stat.companies": "companies",
    "stat.users": "users in production",
    "stat.productivity": "team productivity gain",

    "about.eyebrow": "// about",
    "about.title": "How I work",
    "about.p1":
      "I've been a full stack developer for over 10 years, with a strong root in front-end (React, TypeScript, Next.js) and real hands-on back-end work (.NET, Node.js, Java/Spring Boot). Most of my career was spent on small, lean teams, which meant learning a bit of everything: architecture, technical decisions, deployment, and sitting with end users to see if the system actually solves their problem.",
    "about.p2":
      "I like turning legacy code into something sustainable, and building from scratch when that's what the project needs. I use AI (Claude, Cursor) as part of my daily workflow, always reviewing and validating what gets generated, because I'm the one who signs off on the code.",

    "exp.eyebrow": "// experience",
    "exp.title": "Career path",
    "exp.present": "present",
    "exp.gelic.role": "Senior Front-End Developer",
    "exp.gelic.b1":
      "Architecture and front-end development of a quoting system for the automotive sector, built from scratch with React, Vite and TypeScript",
    "exp.gelic.b2": "Design System built from the ground up: components, patterns and documentation in Storybook",
    "exp.gelic.b3": "React Query for data fetching with per-entity caching; complex forms with React Hook Form + Zod/Yup",
    "exp.gelic.b4": "Migrated authentication to HttpOnly cookies with a custom BFF layer, reducing XSS/CSRF exposure",
    "exp.gelic.b5": "Main front-end technical reference for the team; occasional .NET Core backend work",

    "exp.hap.role": "Technical Lead, Software Engineering",
    "exp.hap.b1":
      "Sole developer in the project's early months, owning architecture, front-end and product decisions",
    "exp.hap.b2":
      "PWA system integrated with an ERP, with real-time communication via WebSockets between waitstaff and kitchen",
    "exp.hap.b3": "Payment integration with Pagar.me built from scratch, covering the full billing flow",
    "exp.hap.b4": "REST APIs with Node.js and Express; CI/CD with Jenkins, Docker and Kubernetes",
    "exp.hap.b5": "Grew into a technical leadership role: mentoring, code review and adoption of agile practices",
    "exp.hap.result": "Results: +30% team productivity · -50% onboarding time",

    "exp.jd3.role": "Junior → Mid → Senior · 8 years",
    "exp.jd3.b1": "Full career progression within the same company, most of it as the company's only developer",
    "exp.jd3.b2": "Modernized a legacy ERP (Delphi/SQL Server), migrating modules to Java 17 + Spring Boot and .NET/C#",
    "exp.jd3.b3":
      "On-site usability validation with end users of ERP, production planning and warehouse management systems",
    "exp.jd3.b4": "Built an application adopted by more than 3,000 users, with under 5% post-launch defects",

    "stack.eyebrow": "// stack",
    "stack.title": "Technologies I actually use",
    "stack.sub": "No inflated list. Just what I genuinely use or have used in production.",
    "stack.frontend": "Front-end",
    "stack.backend": "Back-end",
    "stack.data": "Data",
    "stack.realtime": "Real-time & integrations",
    "stack.testing": "Testing",
    "stack.devops": "DevOps & infra",
    "stack.ai": "Applied AI",
    "stack.aiNote": "AI-assisted engineering, with human technical review on every line.",

    "proj.eyebrow": "// personal projects",
    "proj.title": "Personal projects",
    "proj.private": "Private repository",
    "proj.furafila.sub": "Ordering system for street-food style events",
    "proj.furafila.desc":
      "From QR code scan to final ticket. Backend in .NET 9, modular monolith with EF Core, FluentValidation and Serilog, and a React 19 PWA. Full integration with Mercado Pago's Orders API (Pix, card and counter), each flow with its own HMAC-validated webhook. Real-time notifications via SignalR and Web Push, integration tests with Testcontainers.",
    "proj.obralog.sub": "Offline-first construction site logging app",
    "proj.obralog.desc":
      "React Native with Expo and local SQLite: every write is saved on-device first, without waiting on the network. Bidirectional sync with the backend, including conflict resolution and photo upload. Backend in .NET 9 Minimal APIs + EF Core, acting as a bridge to a third-party system.",
    "proj.kanban.sub": "Kanban board with drag-and-drop",
    "proj.kanban.desc":
      "Fixed To do, Doing and Done columns, cards with title and description, native drag-and-drop via the HTML5 Drag and Drop API. Local persistence in the browser, no backend. Built with Vue 3 Composition API and Pinia for state management.",
    "proj.taskmanager.sub": "Task manager with JWT authentication",
    "proj.taskmanager.desc":
      "Sign up and login with bcrypt-hashed passwords, JWT tokens, task CRUD scoped per user. Angular front-end with standalone components, signals and reactive forms; FastAPI back-end with SQLAlchemy. Automated tests covering authentication and the task routes.",
    "proj.uikit.sub": "React component library documented with Storybook",
    "proj.uikit.desc":
      "12 accessible, tested components: Button, Input, Select, Modal, Toast, Card, Badge, Tabs, Tooltip, Accordion, Skeleton and FormField with React Hook Form + Zod. CSS Modules sharing this portfolio's design tokens, unit tests with Vitest and Testing Library, and real-browser interaction tests via Storybook.",
    "proj.pomodoro.sub": "Pomodoro with gamification and active-break challenges",
    "proj.pomodoro.desc":
      "25-minute focus cycles that earn experience points and, at the end of each cycle, roll a random stretching or eye-rest challenge. Completing challenges levels you up. State (level, xp, completed challenges) persisted in cookies, read server-side via getServerSideProps. Adapted from the Move.it project, built during a Rocketseat Next Level Week.",
    "proj.viewCode": "View code",
    "proj.viewLive": "View live",
    "proj.note": "Furafila and ObraLog have private repositories, but I'm happy to walk through the code in a conversation.",

    "contact.eyebrow": "// contact",
    "contact.title": "Let's talk",
    "contact.sub":
      "Open to remote opportunities, contract or full-time, on teams that value thoughtful architecture and code that lasts.",
    "contact.location": "Jandaia do Sul, Brazil. Available for remote work",

    "footer.note": "Resume tailored on request, depending on the role.",
  },
} satisfies Record<"pt" | "en", Record<string, string>>;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)["pt"];

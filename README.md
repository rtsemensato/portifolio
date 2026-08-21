# portifolio
Portfolio site built with Next.js, showcasing real front-end and full stack experience

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. Conteúdo em PT/EN vive em
[`content/`](content) como arrays/dicionários tipados; o toggle de idioma é um
Context Provider client-side em [`lib/LangContext.tsx`](lib/LangContext.tsx), sem
biblioteca de i18n externa. Ver [`reference/`](reference) para a versão original
em HTML/CSS/JS puro que serviu de base pra esta migração.

## Deploy

Alvo principal é a [Vercel](https://vercel.com) (conectar o repositório direto no
dashboard, sem precisar mexer em build settings). Para GitHub Pages/Cloudflare
Pages, descomente `output: "export"` em `next.config.ts` pra gerar HTML estático.

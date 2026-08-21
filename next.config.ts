import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Alvo principal de deploy é a Vercel (zero config). Se em algum momento
   * o site for hospedado em GitHub Pages ou Cloudflare Pages, descomente a
   * linha abaixo para gerar HTML estático: o site não usa nenhuma feature
   * de servidor, então funciona sem problema como export estático.
   */
  // output: "export",
};

export default nextConfig;

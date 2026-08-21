import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/lib/LangContext";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ricardo Teston Semensato — Engenheiro de Software Full Stack",
  description:
    "Desenvolvedor Full Stack com 10+ anos de experiência em React, TypeScript, Node.js e .NET. Arquitetura, sistemas em produção e engenharia assistida por IA.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

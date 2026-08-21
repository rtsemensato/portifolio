"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  as: "div" | "section";
  className?: string;
  id?: string;
  children: ReactNode;
};

/**
 * Porta do reveal-on-scroll do script.js original: observa o próprio
 * elemento e adiciona a classe "is-visible" (definida em globals.css)
 * assim que ele entra na viewport, depois para de observar.
 */
export default function Reveal({ as: Tag, className, id, children }: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} id={id} className={className} data-reveal="">
      {children}
    </Tag>
  );
}

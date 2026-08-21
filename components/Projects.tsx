"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import Reveal from "./Reveal";
import { projects } from "@/content/projects";

export default function Projects() {
  const { t } = useLang();
  const [expandedQr, setExpandedQr] = useState<string | null>(null);

  return (
    <Reveal as="section" className="section" id="projects">
      <div className="wrap">
        <p className="eyebrow">{t("proj.eyebrow")}</p>
        <h2>{t("proj.title")}</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="project-head">
                <h3>{project.title}</h3>
                {project.isPrivate && <span className="badge-private">{t("proj.private")}</span>}
              </div>
              <p className="project-sub">{t(project.subtitleKey)}</p>
              <p>{t(project.descriptionKey)}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {(project.repoUrl || project.liveUrl || project.expoGoQr) && (
                <div className="project-links">
                  {project.repoUrl && (
                    <a className="project-link" href={project.repoUrl} target="_blank" rel="noopener">
                      {t("proj.viewCode")} ↗
                    </a>
                  )}
                  {project.liveUrl && (
                    <a className="project-link" href={project.liveUrl} target="_blank" rel="noopener">
                      {t("proj.viewLive")} ↗
                    </a>
                  )}
                  {project.expoGoQr && (
                    <button
                      type="button"
                      className="project-link project-link-button"
                      onClick={() => setExpandedQr(expandedQr === project.slug ? null : project.slug)}
                      aria-expanded={expandedQr === project.slug}
                    >
                      {t("proj.tryExpoGo")} {expandedQr === project.slug ? "▲" : "↗"}
                    </button>
                  )}
                </div>
              )}
              {project.expoGoQr && expandedQr === project.slug && (
                <div className="project-qr">
                  {/* <img> comum, não next/image: é um SVG estático já
                      vetorial, e o otimizador do next/image recusa SVG por
                      padrão (retorna 400) a menos que
                      images.dangerouslyAllowSVG seja ligado no
                      next.config, o que não vale a pena só por isso. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.expoGoQr.imageSrc} alt={t("proj.tryExpoGo")} width={140} height={140} />
                  <p className="project-qr-hint">{t("proj.expoGoHint")}</p>
                  <a className="project-link" href={project.expoGoQr.deepLink}>
                    {project.expoGoQr.deepLink}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
        <p className="project-note">{t("proj.note")}</p>
      </div>
    </Reveal>
  );
}

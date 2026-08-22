"use client";

import { useLang } from "@/lib/LangContext";
import Reveal from "./Reveal";
import { projects } from "@/content/projects";

export default function Projects() {
  const { t } = useLang();

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
              {(project.repoUrl || project.liveUrl || project.androidApkUrl) && (
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
                  {project.androidApkUrl && (
                    <a className="project-link" href={project.androidApkUrl} target="_blank" rel="noopener">
                      {t("proj.downloadApk")} ↗
                    </a>
                  )}
                </div>
              )}
              {project.androidApkUrl && <p className="project-qr-hint">{t("proj.androidOnlyHint")}</p>}
            </article>
          ))}
        </div>
        <p className="project-note">{t("proj.note")}</p>
      </div>
    </Reveal>
  );
}

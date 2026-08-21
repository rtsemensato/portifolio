"use client";

import { useLang } from "@/lib/LangContext";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>© {year} Ricardo Teston Semensato</p>
        <p className="footer-note">{t("footer.note")}</p>
      </div>
    </footer>
  );
}

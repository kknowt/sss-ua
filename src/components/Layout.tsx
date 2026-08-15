import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LangContext";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  const { t } = useLang();
  const location = useLocation();
  const [cookies, setCookies] = useState<"unknown" | "yes" | "no">("unknown");

  useEffect(() => {
    const saved = localStorage.getItem("sss-cookies");
    if (saved === "yes" || saved === "no") setCookies(saved);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  const decide = (value: "yes" | "no") => {
    localStorage.setItem("sss-cookies", value);
    setCookies(value);
  };

  return (
    <div className="page">
      <Header />
      <main className="page-main">{children}</main>
      <Footer />
      <Link to="/support" className="pulse-donate" aria-label={t.supportUs}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21s-7-4.6-9.5-9.2C.8 8.4 2.4 5 5.6 5c1.8 0 3.1 1 3.9 2.2C10.3 6 11.6 5 13.4 5c3.2 0 4.8 3.4 3.1 6.8C19 16.4 12 21 12 21z" />
        </svg>
      </Link>
      {cookies === "unknown" ? (
        <div className="cookie">
          <span>{t.cookieText}</span>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn btn-gold" onClick={() => decide("yes")}>
              {t.cookieAccept}
            </button>
            <button className="btn btn-ghost" onClick={() => decide("no")}>
              {t.cookieDecline}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

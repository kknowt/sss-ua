import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [location.pathname, lang]);

  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap header-inner">
        <Link to="/" className="logo" aria-label={t.orgShort}>
          <img src="/logo.png" alt="" />
          <span className="logo-text">
            <b>SSS</b>
            <span>{t.orgShort}</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main">
          <div className="nav-item">
            <span className="nav-link">{t.nav.about}</span>
            <div className="dropdown">
              <NavLink to="/about">{t.nav.who}</NavLink>
              <NavLink to="/history">{t.nav.history}</NavLink>
              <NavLink to="/policies">{t.nav.policies}</NavLink>
              <NavLink to="/partners">{t.nav.partners}</NavLink>
              <NavLink to="/join">{t.nav.tenders}</NavLink>
              <NavLink to="/reports">{t.nav.reports}</NavLink>
              <NavLink to="/support">{t.nav.support}</NavLink>
            </div>
          </div>
          <NavLink to="/projects" className="nav-link">
            {t.nav.projects}
          </NavLink>
          <NavLink to="/materials" className="nav-link">
            {t.nav.materials}
          </NavLink>
          <NavLink to="/news" className="nav-link">
            {t.nav.news}
          </NavLink>
          <NavLink to="/idp" className="nav-link">
            {t.nav.idp}
          </NavLink>
        </nav>

        <div className="header-actions">
          <button
            className={`lang-btn ${lang === "uk" ? "active" : ""}`}
            onClick={() => setLang(lang === "uk" ? "en" : "uk")}
            aria-label="Language"
          >
            {lang === "uk" ? "EN" : "UA"}
          </button>
          <button className="icon-btn" onClick={() => setSearchOpen((v) => !v)} aria-label={t.search}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20L16.5 16.5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <Link className="btn btn-gold" to="/support">
            {t.supportUs}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21s-7-4.6-9.5-9.2C.8 8.4 2.4 5 5.6 5c1.8 0 3.1 1 3.9 2.2C10.3 6 11.6 5 13.4 5c3.2 0 4.8 3.4 3.1 6.8C19 16.4 12 21 12 21z" />
            </svg>
          </Link>
          <button className="burger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen ? (
          <motion.div
            className="search-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <form className="wrap" onSubmit={submitSearch}>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.searchPlaceholder}
                autoFocus
              />
              <button className="btn btn-navy" type="submit">
                {t.search}
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="wrap">
          <NavLink to="/about">{t.nav.who}</NavLink>
          <NavLink to="/history">{t.nav.history}</NavLink>
          <NavLink to="/projects">{t.nav.projects}</NavLink>
          <NavLink to="/news">{t.nav.news}</NavLink>
          <NavLink to="/idp">{t.nav.idp}</NavLink>
          <NavLink to="/materials">{t.nav.materials}</NavLink>
          <NavLink to="/partners">{t.nav.partners}</NavLink>
          <NavLink to="/join">{t.nav.tenders}</NavLink>
          <NavLink to="/reports">{t.nav.reports}</NavLink>
          <NavLink to="/policies">{t.nav.policies}</NavLink>
          <NavLink to="/contact">{t.nav.contact}</NavLink>
          <NavLink to="/support">{t.supportUs}</NavLink>
        </div>
      </div>
    </header>
  );
}

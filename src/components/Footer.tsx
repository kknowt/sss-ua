import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { asset } from "../lib/asset";
import { socials } from "../data/content";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-help">
          <article className="help-card">
            <div>
              <h3>{t.complainTitle}</h3>
              <p>{t.complainText}</p>
            </div>
            <Link className="btn btn-orange" to="/contact">
              {t.complainBtn}
            </Link>
          </article>
          <article className="help-card">
            <div>
              <h3>{t.legalTitle}</h3>
              <p>{t.legalText}</p>
            </div>
            <Link className="btn btn-ghost" to="/contact">
              {t.nav.contact}
            </Link>
          </article>
        </div>
        <div className="footer-mid">
          <Link to="/" className="logo">
            <img src={asset("logo.png")} alt="" />
            <span className="logo-text">
              <b>SSS</b>
              <span>{t.orgShort}</span>
            </span>
          </Link>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              {t.footerSocial}
            </div>
            <div className="socials">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" title={s.name}>
                  {s.name[0]}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              {t.footerEmail}
            </div>
            <a href="mailto:info@sss-ua.org">
              <b>info@sss-ua.org</b>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>{t.copyright}</div>
          <Link to="/privacy">{t.privacy}</Link>
        </div>
      </div>
    </footer>
  );
}

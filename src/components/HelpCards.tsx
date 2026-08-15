import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";

export default function HelpCards() {
  const { t } = useLang();
  return (
    <div className="help-row">
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
          {t.legalLink}
        </Link>
      </article>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";
import { tenders } from "../data/content";

export default function Join() {
  const { lang, t } = useLang();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.joinTitle} lead={t.joinLead} />
      <section className="section">
        <div className="wrap">
          <div className="hero-actions" style={{ marginBottom: 28 }}>
            <Link className="btn btn-gold" to="/support">
              {t.supportUs}
            </Link>
            <a className="btn btn-navy" href="mailto:info@sss-ua.org">
              {t.joinUs}
            </a>
          </div>
          <div className="timeline">
            {tenders.map((item, i) => (
              <Reveal key={item.title.en} delay={i * 0.03}>
                <article className="year">
                  <div>
                    <div className={`badge ${item.status === "active" ? "live" : "done"}`}>
                      {item.status === "active" ? t.active : t.archived}
                    </div>
                    <b style={{ display: "block", marginTop: 10, fontSize: 18 }}>{item.date}</b>
                  </div>
                  <p style={{ color: "var(--text)", fontWeight: 600 }}>{item.title[lang]}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

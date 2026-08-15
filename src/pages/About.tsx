import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";
import { activities } from "../data/content";
import { asset } from "../lib/asset";

export default function About() {
  const { lang, t } = useLang();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero eyebrow={t.aboutEyebrow} title={t.orgName} lead={t.aboutLead} />
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <img src={asset("images/about.jpg")} alt="" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="prose">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-gold" to="/support">
                {t.supportUs}
              </Link>
              <Link className="btn btn-ghost" to="/history">
                {t.nav.history}
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="wrap">
          <h2 style={{ marginBottom: 22 }}>{t.whatWeDo}</h2>
          <div className="area-grid">
            {t.areas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.05}>
                <article className="area">
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="chips" style={{ marginTop: 28 }}>
            {activities.map((a) => (
              <span className="chip" key={a.en}>
                {a[lang]}
              </span>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

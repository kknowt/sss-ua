import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import HelpCards from "../components/HelpCards";
import Reveal from "../components/Reveal";
import UkraineMap from "../components/UkraineMap";
import { useLang } from "../context/LangContext";
import { activities, news, projects, stats } from "../data/content";

export default function Home() {
  const { lang, t } = useLang();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">{t.orgShort}</div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {t.orgName}
            </motion.h1>
            <p className="lead">{t.tagline}</p>
            <div className="hero-actions">
              <Link className="btn btn-gold" to="/support">
                {t.supportUs}
              </Link>
              <Link className="btn btn-navy" to="/about">
                {t.moreAbout}
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <img src="/images/hero.jpg" alt="" />
            </div>
            <div className="hero-badge">
              <b>2015–2026</b>
              <span>{lang === "uk" ? "Десять років підтримки людей і громад" : "A decade of support for people and communities"}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <Reveal>
            <div className="stats-card">
              <div className="stats-head">
                <h2>{t.resultsTitle}</h2>
                <Link className="link-arrow" to="/about">
                  {t.moreAbout} →
                </Link>
              </div>
              <div className="stats-grid">
                {stats.map((item) => (
                  <div className="stat" key={item.value}>
                    <Counter value={item.value} />
                    <span>{item[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <HelpCards />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.latest}</h2>
            <Link className="link-arrow" to="/news">
              {t.allNews} →
            </Link>
          </div>
          <div className="cards">
            {news.slice(0, 6).map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.06}>
                <Link className="card" to={`/news/${item.slug}`}>
                  <div className="card-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="card-body">
                    <div className="meta">
                      <span>{item.type[lang]}</span>
                      <time>{item.date}</time>
                    </div>
                    <h3>{item.title[lang]}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission">
        <div className="wrap mission-grid">
          <Reveal>
            <div className="map-wrap">
              <UkraineMap />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="eyebrow">{t.mapTitle}</div>
            <h2>{t.mission}</h2>
            <div className="chips">
              {activities.map((a) => (
                <span className="chip" key={a.en}>
                  {a[lang]}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>{t.projectsTitle}</h2>
            <Link className="link-arrow" to="/projects">
              {t.allProjects} →
            </Link>
          </div>
          <div className="cards">
            {projects.slice(0, 6).map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <Link className="card" to="/projects">
                  <div className="card-body">
                    <div className="meta">
                      <span className={`badge ${project.status === "active" ? "live" : "done"}`}>
                        {project.status === "active" ? t.active : t.completed}
                      </span>
                      <time>{project.date}</time>
                    </div>
                    <h3>{project.title[lang]}</h3>
                    <p className="prose">{project.summary[lang]}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <Reveal>
            <div className="cta-card">
              <div>
                <h2>{t.ctaTitle}</h2>
                <p>{t.ctaText}</p>
              </div>
              <div className="cta-actions">
                <Link className="btn btn-gold" to="/support">
                  {t.supportUs}
                </Link>
                <Link className="btn btn-ghost" to="/join">
                  {t.joinUs}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
}

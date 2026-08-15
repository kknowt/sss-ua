import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import UkraineMap from "../components/UkraineMap";
import { useLang } from "../context/LangContext";
import { news, projects } from "../data/content";

export default function Idp() {
  const { lang, t } = useLang();
  const related = projects.filter((p) => p.tags.uk.includes("Ради ВПО"));
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.idpTitle} lead={t.idpLead} />
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <div className="prose">
              <p>{t.idpP1}</p>
              <p>{t.idpP2}</p>
              <ul style={{ marginTop: 16, paddingLeft: 18, display: "grid", gap: 8 }}>
                {t.idpTasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="map-wrap">
              <UkraineMap />
            </div>
          </Reveal>
        </div>
        <div className="wrap">
          <h2 style={{ marginBottom: 22 }}>{t.projectsTitle}</h2>
          <div className="cards">
            {related.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <article className="card">
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
                </article>
              </Reveal>
            ))}
          </div>
          <h2 style={{ margin: "48px 0 22px" }}>{t.latest}</h2>
          <div className="cards">
            {news.slice(0, 3).map((item) => (
              <Link className="card" key={item.slug} to={`/news/${item.slug}`}>
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
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

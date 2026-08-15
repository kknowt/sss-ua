import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";
import { projects } from "../data/content";

export default function Projects() {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState("all");
  const list = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.projectsTitle} lead={t.mission} />
      <section className="section">
        <div className="wrap">
          <div className="filters">
            {[
              ["all", t.filterAll],
              ["humanitarian", t.filterHumanitarian],
              ["advocacy", t.filterAdvocacy],
              ["education", t.filterEducation],
            ].map(([id, label]) => (
              <button
                key={id}
                className={`filter ${filter === id ? "active" : ""}`}
                onClick={() => setFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="cards">
            {list.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.04}>
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
                    <div className="chips">
                      {project.tags[lang].map((tag) => (
                        <span className="chip" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

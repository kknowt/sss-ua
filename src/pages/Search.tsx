import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";
import { news, projects } from "../data/content";

export default function Search() {
  const { lang, t } = useLang();
  const [params] = useSearchParams();
  const q = (params.get("q") || "").trim().toLowerCase();
  const foundNews = news.filter(
    (n) => n.title[lang].toLowerCase().includes(q) || n.excerpt[lang].toLowerCase().includes(q)
  );
  const foundProjects = projects.filter(
    (p) => p.title[lang].toLowerCase().includes(q) || p.summary[lang].toLowerCase().includes(q)
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={`${t.search}: ${params.get("q") || ""}`} />
      <section className="section">
        <div className="wrap">
          {!foundNews.length && !foundProjects.length ? <p>{t.empty}</p> : null}
          <div className="cards">
            {foundNews.map((item) => (
              <Link className="card" key={item.slug} to={`/news/${item.slug}`}>
                <div className="card-body">
                  <div className="meta">
                    <span>{item.type[lang]}</span>
                    <time>{item.date}</time>
                  </div>
                  <h3>{item.title[lang]}</h3>
                </div>
              </Link>
            ))}
            {foundProjects.map((item) => (
              <article className="card" key={item.slug}>
                <div className="card-body">
                  <div className="meta">
                    <span className="badge">{t.nav.projects}</span>
                    <time>{item.date}</time>
                  </div>
                  <h3>{item.title[lang]}</h3>
                  <p className="prose">{item.summary[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

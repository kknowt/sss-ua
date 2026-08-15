import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";
import { news } from "../data/content";

export default function News() {
  const { lang, t } = useLang();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.nav.news} />
      <section className="section">
        <div className="wrap cards">
          {news.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.04}>
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
                  <p className="prose">{item.excerpt[lang]}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

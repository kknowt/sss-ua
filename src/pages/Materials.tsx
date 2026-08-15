import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";
import { news } from "../data/content";

export default function Materials() {
  const { lang, t } = useLang();
  const items = news.filter((n) => n.type.uk === "Корисні матеріали").concat(news.slice(0, 3));
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.materialsTitle} />
      <section className="section">
        <div className="wrap cards">
          {items.map((item) => (
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
      </section>
    </motion.div>
  );
}

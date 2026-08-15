import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { news } from "../data/content";
import NotFound from "./NotFound";

export default function Article() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const item = news.find((n) => n.slug === slug);
  if (!item) return <NotFound />;

  return (
    <motion.article
      className="article wrap"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <Link className="link-arrow" to="/news" style={{ display: "inline-flex", marginTop: 28 }}>
        ← {t.back}
      </Link>
      <div className="meta" style={{ marginTop: 18 }}>
        <span>{item.type[lang]} · {item.region[lang]}</span>
        <time>{item.date}</time>
      </div>
      <h1 style={{ marginTop: 12 }}>{item.title[lang]}</h1>
      <img className="cover" src={item.image} alt="" />
      {item.body[lang].map((p) => (
        <p key={p}>{p}</p>
      ))}
    </motion.article>
  );
}

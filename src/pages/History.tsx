import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";
import { history } from "../data/content";

export default function History() {
  const { lang, t } = useLang();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.historyTitle} lead={t.historyLead} />
      <section className="section">
        <div className="wrap timeline">
          {history.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.03}>
              <article className="year">
                <b>{item.year}</b>
                <p>{item[lang]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";
import { partners } from "../data/content";

export default function Partners() {
  const { t } = useLang();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.partnersTitle} />
      <section className="section">
        <div className="wrap partners">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.03}>
              <a className="partner" href={p.href} target="_blank" rel="noreferrer">
                {p.name}
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

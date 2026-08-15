import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        {lead ? <p>{lead}</p> : null}
      </div>
    </section>
  );
}

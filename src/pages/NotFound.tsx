import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";

export default function NotFound() {
  const { t } = useLang();
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="wrap" style={{ padding: "80px 0" }}>
        <h1>404</h1>
        <p className="lead">{t.notFound}</p>
        <Link className="btn btn-navy" to="/" style={{ marginTop: 22, width: "fit-content" }}>
          {t.home}
        </Link>
      </div>
    </motion.section>
  );
}

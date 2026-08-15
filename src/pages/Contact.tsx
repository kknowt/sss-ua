import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";

export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const existing = JSON.parse(localStorage.getItem("sss-messages") || "[]");
    localStorage.setItem("sss-messages", JSON.stringify([...existing, { ...data, at: new Date().toISOString() }]));
    e.currentTarget.reset();
    setSent(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.contactTitle} lead={t.contactLead} />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <form className="form" onSubmit={onSubmit}>
            <div className="form-grid">
              <label>
                {t.formName}
                <input name="name" required />
              </label>
              <label>
                {t.formEmail}
                <input name="email" type="email" required />
              </label>
              <label>
                {t.formPhone}
                <input name="phone" />
              </label>
              <label>
                {t.formTopic}
                <input name="topic" required />
              </label>
              <label>
                {t.formRegion}
                <input name="region" />
              </label>
              <label>
                {t.formCity}
                <input name="city" />
              </label>
            </div>
            <label>
              {t.formMessage}
              <textarea name="message" required />
            </label>
            <button className="btn btn-navy" type="submit">
              {t.send}
            </button>
            {sent ? <div className="notice">{t.sent}</div> : null}
          </form>
        </div>
      </section>
    </motion.div>
  );
}

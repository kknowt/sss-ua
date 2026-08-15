import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../context/LangContext";
import { accounts } from "../data/content";
import { asset } from "../lib/asset";

export default function Support() {
  const { t } = useLang();
  const [copied, setCopied] = useState<string | null>(null);

  const copyIban = async (iban: string) => {
    await navigator.clipboard.writeText(iban);
    setCopied(iban);
    setTimeout(() => setCopied(null), 1600);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.supportTitle} lead={t.supportLead} />
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <img src={asset("images/activity.jpg")} alt="" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="prose">
              <p>{t.supportP1}</p>
              <p>{t.supportP2}</p>
            </div>
            <div className="hero-actions">
              <a className="btn btn-gold" href="mailto:info@sss-ua.org">
                info@sss-ua.org
              </a>
              <Link className="btn btn-ghost" to="/join">
                {t.joinUs}
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="wrap">
          <h2 style={{ marginBottom: 22 }}>{t.bankTitle}</h2>
          <div className="cards">
            {accounts.map((acc) => (
              <article className="account" key={acc.iban}>
                <h3>{acc.currency}</h3>
                <dl>
                  <div>
                    <dt>Company</dt>
                    <dd>{acc.company}</dd>
                  </div>
                  <div>
                    <dt>IBAN</dt>
                    <dd>{acc.iban}</dd>
                  </div>
                  <div>
                    <dt>Bank</dt>
                    <dd>{acc.bank}</dd>
                  </div>
                  <div>
                    <dt>SWIFT</dt>
                    <dd>{acc.swift}</dd>
                  </div>
                </dl>
                <button className="btn btn-navy" style={{ marginTop: 16 }} onClick={() => copyIban(acc.iban)}>
                  {copied === acc.iban ? t.copied : t.copyIban}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

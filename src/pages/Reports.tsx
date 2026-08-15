import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";

const docs = {
  founding: [
    "Статут Благодійного фонду Стабілізейшен Суппорт Сервісез",
    "Виписка з Єдиного державного реєстру",
    "Відомості з ЄДРПОУ",
    "Рішення ДПІ / ознака неприбутковості",
    "Банківські та поштові реквізити",
    "Лист Національної соціальної сервісної служби",
  ],
  tax: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"].map(
    (y) => `Податковий звіт про використання коштів неприбуткових організацій (${y}-12)`
  ),
  audit: [
    "Звіт незалежного аудитора Marinchenko & Partners 2021",
    "Звіт незалежного аудитора COMPASS GROUP 2022",
    "Звіт незалежного аудитора UHY PROSTOR LLC 2023",
  ],
};

export default function Reports() {
  const { t } = useLang();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.reportsTitle} lead={t.reportsLead} />
      <section className="section">
        <div className="wrap" style={{ display: "grid", gap: 36 }}>
          <div>
            <h2 style={{ marginBottom: 16 }}>{t.founding}</h2>
            <div className="doc-list">
              {docs.founding.map((d) => (
                <div className="doc" key={d}>
                  <span>{d}</span>
                  <span>PDF</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ marginBottom: 16 }}>{t.tax}</h2>
            <div className="doc-list">
              {docs.tax.map((d) => (
                <div className="doc" key={d}>
                  <span>{d}</span>
                  <span>PDF</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ marginBottom: 16 }}>{t.audit}</h2>
            <div className="doc-list">
              {docs.audit.map((d) => (
                <div className="doc" key={d}>
                  <span>{d}</span>
                  <span>PDF</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

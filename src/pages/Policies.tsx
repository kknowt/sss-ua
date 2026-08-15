import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";

export default function Policies() {
  const { lang, t } = useLang();
  const items =
    lang === "uk"
      ? [
          {
            title: "Кодекс етики",
            text: "Визначає цінності організації: відповідальність, служіння суспільству, гендерно-чутливий підхід, релігійну свободу, неприбутковість, незалежність і конфіденційність.",
          },
          {
            title: "Гендерна політика",
            text: "Протидія гендерній нерівності, гендерно чутливе планування програм і посилення ролі жінок і дівчат у суспільстві.",
          },
          {
            title: "Політична нейтральність",
            text: "Стандарти політичної нейтральності фонду, програми «Радник з питань ВПО», працівників і підрядників.",
          },
          {
            title: "Політика безпеки",
            text: "Захист і безпека підрядників, співробітників і членів виїзних груп є основною відповідальністю організації.",
          },
        ]
      : [
          {
            title: "Code of Ethics",
            text: "Defines the organization’s values: responsibility, service to society, a gender-sensitive approach, religious freedom, non-profit status, independence, and confidentiality.",
          },
          {
            title: "Gender policy",
            text: "Countering gender inequality, gender-sensitive program planning, and strengthening the role of women and girls in society.",
          },
          {
            title: "Political neutrality",
            text: "Standards of political neutrality for the Foundation, the IDP Adviser program, staff, and contractors.",
          },
          {
            title: "Security policy",
            text: "The safety of contractors, staff, and field teams is a core responsibility of the organization.",
          },
        ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.policiesTitle} lead={t.policiesLead} />
      <section className="section">
        <div className="wrap area-grid">
          {items.map((item) => (
            <article className="area" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

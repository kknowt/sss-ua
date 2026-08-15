import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";

export default function Privacy() {
  const { lang, t } = useLang();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={t.privacy} />
      <section className="section">
        <div className="wrap prose" style={{ maxWidth: 820 }}>
          {lang === "uk" ? (
            <>
              <p>
                Цей сайт є сучасною демонстраційною версією офіційного ресурсу Благодійного фонду «Стабілізейшен суппорт сервісез».
                Ми обробляємо лише ті дані, які ви свідомо надсилаєте через форму звернення, і зберігаємо їх локально у вашому браузері.
              </p>
              <p>
                Офіційна політика конфіденційності фонду доступна на sss-ua.org. Для запитів щодо персональних даних пишіть на info@sss-ua.org.
              </p>
            </>
          ) : (
            <>
              <p>
                This site is a modern demonstration remake of the official Charity Foundation Stabilization Support Services website.
                We only process data you consciously submit through the contact form, and store it locally in your browser.
              </p>
              <p>
                The Foundation’s official privacy policy is available at sss-ua.org. For personal data requests write to info@sss-ua.org.
              </p>
            </>
          )}
          <Link className="btn btn-navy" to="/" style={{ marginTop: 18, width: "fit-content" }}>
            {t.home}
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

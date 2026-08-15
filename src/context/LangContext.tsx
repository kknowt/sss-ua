import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Lang } from "../data/content";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof copy)[Lang];
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("sss-lang");
    return saved === "en" ? "en" : "uk";
  });

  useEffect(() => {
    localStorage.setItem("sss-lang", lang);
    document.documentElement.lang = lang === "uk" ? "uk" : "en";
    document.title =
      lang === "uk"
        ? "БО «Благодійний фонд «Стабілізейшен суппорт сервісез»"
        : "Charity Foundation “Stabilization Support Services”";
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: copy[lang] }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

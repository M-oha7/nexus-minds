import { useState } from "react";
import LanguageToggle from "./components/LanguageToggle.jsx";
import MentalTest from "./components/MentalTest.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";
import { getCopy } from "./i18n/translations.js";

function App() {
  const [view, setView] = useState("home");
  const { lang } = useLanguage();
  const t = getCopy(lang).home;

  if (view === "test") {
    return <MentalTest onHome={() => setView("home")} />;
  }

  return (
    <main className="page">
      <LanguageToggle />
      <p className="quote">{t.quote}</p>
      <button type="button" className="btn btn-primary home-cta" onClick={() => setView("test")}>
        {t.startTest}
      </button>
    </main>
  );
}

export default App;

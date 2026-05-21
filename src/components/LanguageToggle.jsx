import { useLanguage } from "../context/LanguageContext.jsx";
import { getCopy } from "../i18n/translations.js";

function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const t = getCopy(lang).langToggle;

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={`${t.label}: switch to ${t.switchTo}`}
    >
      {t.switchTo}
    </button>
  );
}

export default LanguageToggle;

import { useState } from "react";
import { getSystemPageContent } from "../data/systemPageContent.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import LanguageToggle from "./LanguageToggle.jsx";

function SystemPage({ onHome, onRetake }) {
  const { lang } = useLanguage();
  const content = getSystemPageContent(lang);
  const [expanded, setExpanded] = useState({});

  function toggleCard(id) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <main className="page system-page">
      <LanguageToggle />
      <div className="system-container">
        <header className="system-header">
          <h1 className="system-title">{content.pageTitle}</h1>
          <p className="system-subtitle">{content.pageSubtitle}</p>
        </header>

        <section className="accordion" aria-label={content.patternsLabel}>
          {content.patterns.map((pattern) => {
            const isOpen = !!expanded[pattern.id];

            return (
              <article key={pattern.id} className={`accordion-card${isOpen ? " accordion-card--open" : ""}`}>
                <button
                  type="button"
                  className="accordion-trigger"
                  onClick={() => toggleCard(pattern.id)}
                  aria-expanded={isOpen}
                >
                  <span className="accordion-trigger__title">{pattern.title}</span>
                  <span className="accordion-trigger__icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="accordion-panel">
                    <div className="pattern-card__section">
                      <h3 className="pattern-card__label">{content.whatItMeans}</h3>
                      {pattern.meaning.map((paragraph, i) => (
                        <p key={i} className="pattern-card__text">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div className="pattern-card__section">
                      <h3 className="pattern-card__label">{content.toolsLabel}</h3>
                      <ul className="pattern-card__tools">
                        {pattern.tools.map((tool, i) => (
                          <li key={i}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </section>

        <section className="routine-section" aria-label={content.routineTitle}>
          <h2 className="routine-title">{content.routineTitle}</h2>
          <ul className="routine-list">
            {content.routine.map((item, i) => (
              <li key={i} className="routine-item">
                <span className="routine-item__when">{item.when}</span>
                <p className="routine-item__habit">{item.habit}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="system-actions">
          <button type="button" className="btn btn-ghost" onClick={onRetake}>
            {content.retakeTest}
          </button>
          <button type="button" className="btn btn-ghost" onClick={onHome}>
            {content.home}
          </button>
        </div>
      </div>
    </main>
  );
}

export default SystemPage;

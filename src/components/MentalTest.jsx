import { useState } from "react";
import { questions, closingLine } from "../data/mentalTest.js";

function MentalTest({ onHome }) {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState("questions");
  const [answers, setAnswers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const question = questions[step];
  const isLast = step === questions.length - 1;
  const selectedOption =
    selectedIndex !== null ? question.options[selectedIndex] : null;

  function handleSelect(optionIndex) {
    setSelectedIndex(optionIndex);
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = optionIndex;
      return next;
    });
  }

  function handleNext() {
    if (selectedIndex === null) return;

    if (isLast) {
      setPhase("results");
      return;
    }

    setStep((s) => s + 1);
    setSelectedIndex(null);
  }

  function handleRestart() {
    setStep(0);
    setPhase("questions");
    setAnswers([]);
    setSelectedIndex(null);
  }

  if (phase === "results") {
    const points = answers.map((optionIndex, i) =>
      questions[i].options[optionIndex].summaryPoint,
    );

    return (
      <main className="page test-page">
        <div className="test-container">
          <h1 className="test-title">هذا ما يعكسه ما شاركته</h1>
          <ul className="results-list">
            {points.map((point, i) => (
              <li key={i} className="results-item">
                <span className="results-number">{i + 1}</span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
          <p className="closing-line">{closingLine}</p>
          <div className="test-actions">
            <button type="button" className="btn btn-primary" onClick={handleRestart}>
              ابدأ بناء نظامك
            </button>
            <button type="button" className="btn btn-ghost" onClick={onHome}>
              الصفحة الرئيسية
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page test-page">
      <div className="test-container">
        <div className="test-progress">
          <span>
            سؤال {step + 1} من {questions.length}
          </span>
          <div className="progress-bar" aria-hidden="true">
            <div
              className="progress-fill"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <h1 className="test-question">{question.text}</h1>

        <ul className="options-list">
          {question.options.map((option, i) => (
            <li key={option.label}>
              <button
                type="button"
                className={`option-btn${selectedIndex === i ? " option-btn--selected" : ""}`}
                onClick={() => handleSelect(i)}
                aria-pressed={selectedIndex === i}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>

        {selectedOption && (
          <p className="inline-feedback">{selectedOption.feedback}</p>
        )}

        {selectedIndex !== null && (
          <button type="button" className="btn btn-primary test-next" onClick={handleNext}>
            {isLast ? "عرض النتيجة" : "السؤال التالي"}
          </button>
        )}

        <button type="button" className="btn btn-ghost test-back" onClick={onHome}>
          ← الصفحة الرئيسية
        </button>
      </div>
    </main>
  );
}

export default MentalTest;

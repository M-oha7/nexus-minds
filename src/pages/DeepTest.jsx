import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function DeepTest({ answers, addAnswer, onComplete }) {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showReflection, setShowReflection] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  const questions = [
    'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'
  ];

  const currentQ = questions[currentQuestion];
  const questionData = t(`test.${currentQ}`, { returnObjects: true });
  const progress = ((currentQuestion + (showReflection ? 1 : 0)) / questions.length) * 100;

  const handleAnswer = (tag) => {
    setSelectedTag(tag);
    setShowReflection(true);
  };

  const handleNext = () => {
    addAnswer(selectedTag);
    setShowReflection(false);
    setSelectedTag(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="page page-enter-active">
      <div className="test-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="card test-card">
          {!showReflection ? (
            <>
              <h2 className="question-title">{questionData.question}</h2>
              <div className="options-grid">
                {questionData.options.map((option, index) => (
                  <button
                    key={index}
                    className="option-button"
                    onClick={() => handleAnswer(option.tag)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="reflection-container">
              <h3 className="reflection-title">{t('test.reflection')}</h3>
              <p className="reflection-text">
                {t(`reflections.${selectedTag}`)}
              </p>
              <button className="button" onClick={handleNext}>
                {t('test.next')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeepTest;

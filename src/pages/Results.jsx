import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { analyzeMind } from '../utils/claudeAPI';
import { sendFeedbackToGoogleSheets } from '../utils/googleSheets';

function Results({ answers, mindType, setMindType, onBuildSystem }) {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [feedbackReason, setFeedbackReason] = useState('');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await analyzeMind(answers, i18n.language);
        setResult(data);
        setMindType(data.mindType);

        localStorage.setItem('nexus_results', JSON.stringify({
          mindType: data.mindType,
          mindTypeAR: data.mindTypeAR,
          description: data.description,
          strengths: data.strengths,
          challenges: data.challenges,
          insight: data.insight,
          answers,
          timestamp: new Date().toISOString()
        }));

        setLoading(false);
      } catch (err) {
        console.error('Error analyzing mind:', err);
        setError(true);
        setLoading(false);

        const fallbackData = {
          mindType: i18n.language === 'ar' ? 'المعالج العميق' : 'Deep Processor',
          mindTypeAR: 'المعالج العميق',
          description: i18n.language === 'ar'
            ? 'عقلك يعمل بعمق ويحتاج وقتاً للمعالجة. هذا ليس عيباً بل قوة عندما تُستخدم بشكل صحيح.'
            : 'Your mind works deeply and needs time to process. This is not a flaw but a strength when used correctly.',
          strengths: i18n.language === 'ar'
            ? ['تفكير عميق', 'دقة في التحليل', 'قدرة على الفهم الشامل']
            : ['Deep thinking', 'Precise analysis', 'Comprehensive understanding'],
          challenges: i18n.language === 'ar'
            ? ['يحتاج وقتاً للقرار', 'الإرهاق من المحفزات الكثيرة', 'صعوبة في الشرح السريع']
            : ['Needs time to decide', 'Exhausted by many stimuli', 'Difficulty explaining quickly'],
          insight: i18n.language === 'ar'
            ? 'عقلك مثل مكتبة ضخمة — تحتاج نظاماً للوصول للكتب المهمة بسرعة.'
            : 'Your mind is like a vast library — it needs a system to access important books quickly.'
        };
        setResult(fallbackData);

        localStorage.setItem('nexus_results', JSON.stringify({
          ...fallbackData,
          answers,
          timestamp: new Date().toISOString()
        }));
      }
    };

    fetchResults();
  }, [answers, i18n.language, setMindType]);

  const saveFeedback = async (value, reason = feedbackReason) => {
    const feedbackData = {
      timestamp: new Date().toISOString(),
      mindType: result?.mindType || '',
      feedback: value,
      reason,
      language: i18n.language,
      answers,
      userAgent: navigator.userAgent
    };

    setFeedback(value);
    localStorage.setItem('nexus_feedback', JSON.stringify(feedbackData));

    try {
      await sendFeedbackToGoogleSheets(feedbackData);
    } catch (err) {
      console.error('Error sending feedback:', err);
    }
  };

  const handleReasonChange = (event) => {
    setFeedbackReason(event.target.value);
  };

  const handleReasonBlur = () => {
    if (feedback) {
      saveFeedback(feedback, feedbackReason);
    }
  };

  if (loading) {
    return (
      <div className="page page-enter-active">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p className="loading-text">{t('results.loading')}</p>
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="page page-enter-active">
      <div className="results-container">
        <div className="card results-card">
          <div className="mind-type-badge">
            {result.mindType}
          </div>

          <h2 className="results-title">{t('results.description')}</h2>
          <p className="results-description">{result.description}</p>

          <div className="strengths-section">
            <h3 className="section-title">{t('results.strengths')}</h3>
            <ul className="strengths-list">
              {result.strengths.map((strength, index) => (
                <li key={index} className="strength-item">{strength}</li>
              ))}
            </ul>
          </div>

          <div className="challenges-section">
            <h3 className="section-title">{t('results.challenges')}</h3>
            <ul className="challenges-list">
              {result.challenges.map((challenge, index) => (
                <li key={index} className="challenge-item">{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="insight-box">
            <p className="insight-text">"{result.insight}"</p>
          </div>

          <div className="feedback-section">
            <p className="feedback-title">?Did this feel accurate</p>
            <div className="feedback-buttons">
              <button
                className={`button feedback-accurate ${feedback === 'accurate' ? 'selected' : ''}`}
                onClick={() => saveFeedback('accurate')}
              >
                Yes👍
              </button>
              <button
                className={`button feedback-inaccurate ${feedback === 'inaccurate' ? 'selected' : ''}`}
                onClick={() => saveFeedback('inaccurate')}
              >
                Not really👎
              </button>
            </div>
            <textarea
              className="feedback-textarea"
              placeholder="(اختياري) Tell us why"
              value={feedbackReason}
              onChange={handleReasonChange}
              onBlur={handleReasonBlur}
              rows="2"
            />
          </div>

          <button className="button" onClick={onBuildSystem}>
            {t('results.button')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;

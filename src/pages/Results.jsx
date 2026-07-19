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
  const [matchPercentage, setMatchPercentage] = useState(0);

  // Calculate pattern match percentage based on answer consistency
  const calculateMatchPercentage = (answers) => {
    if (answers.length === 0) return 0;
    
    const tagCounts = {};
    answers.forEach(answer => {
      tagCounts[answer] = (tagCounts[answer] || 0) + 1;
    });
    
    const maxCount = Math.max(...Object.values(tagCounts));
    const percentage = Math.round((maxCount / answers.length) * 100);
    
    return Math.min(Math.max(percentage, 65), 92);
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await analyzeMind(answers, i18n.language);
        setResult(data);
        setMindType(data.mindType);
        
        const percentage = calculateMatchPercentage(answers);
        setMatchPercentage(percentage);

        localStorage.setItem('nexus_results', JSON.stringify({
          mindType: data.mindType,
          mindTypeAR: data.mindTypeAR,
          description: data.description,
          strengths: data.strengths,
          challenges: data.challenges,
          insight: data.insight,
          answers,
          matchPercentage: percentage,
          timestamp: new Date().toISOString()
        }));

        setLoading(false);
      } catch (err) {
        console.error('Error analyzing mind:', err);
        setError(true);
        setLoading(false);
        
        const percentage = calculateMatchPercentage(answers);
        setMatchPercentage(percentage);

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
          matchPercentage: percentage,
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

  const handleShare = () => {
    const shareText = i18n.language === 'ar'
      ? `نمط عقلي: ${result.mindTypeAR || result.mindType}\nتطابق: ${matchPercentage}%\nاكتشف نمط عقلك في Nexus Minds`
      : `My Mind Pattern: ${result.mindType}\nMatch: ${matchPercentage}%\nDiscover your mind pattern at Nexus Minds`;
    
    if (navigator.share) {
      navigator.share({
        title: i18n.language === 'ar' ? 'نمط عقلي - Nexus Minds' : 'My Mind Pattern - Nexus Minds',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
      alert(i18n.language === 'ar' ? 'تم نسخ النتيجة!' : 'Result copied!');
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
          {/* Pattern Card */}
          <div className="pattern-card">
            <div className="pattern-header">
              <span className="pattern-label">{t('results.pattern')}</span>
              <button className="share-icon" onClick={handleShare} title={t('results.share')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                  <polyline points="16 6 12 2 8 6"/>
                  <line x1="12" y1="2" x2="12" y2="15"/>
                </svg>
              </button>
            </div>
            <h1 className="pattern-name">{result.mindType}</h1>
            <div className="pattern-match">
              <span className="match-text">{t('results.basedOn')}</span>
              <span className="match-percentage">{matchPercentage}%</span>
              <span className="match-label">{t('results.percentage')}</span>
            </div>
          </div>

          <h2 className="results-title">{t('results.description')}</h2>
          <p className="results-description">{result.description}</p>
          
          {/* Observable Behaviors */}
          <div className="observable-section">
            <h3 className="section-title">{t('results.observable')}</h3>
            <ul className="behaviors-list">
              <li className="behavior-item">{t('results.behaviors.b1')}</li>
              <li className="behavior-item">{t('results.behaviors.b2')}</li>
              <li className="behavior-item">{t('results.behaviors.b3')}</li>
              <li className="behavior-item">{t('results.behaviors.b4')}</li>
              <li className="behavior-item">{t('results.behaviors.b5')}</li>
            </ul>
          </div>

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

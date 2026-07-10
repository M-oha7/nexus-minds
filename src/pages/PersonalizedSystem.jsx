import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { buildSystem } from '../utils/claudeAPI';

function PersonalizedSystem({ answers, mindType, onRestart, savedSystemData }) {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [system, setSystem] = useState(null);
  const [expandedPattern, setExpandedPattern] = useState(null);

  useEffect(() => {
    // If we have saved system data (from Welcome Back), use it directly
    if (savedSystemData && savedSystemData.patterns) {
      setSystem(savedSystemData);
      setLoading(false);
      return;
    }

    // Otherwise, fetch from API (fresh test)
    const fetchSystem = async () => {
      try {
        const data = await buildSystem(answers, mindType, i18n.language);
        setSystem(data);
        
        // Save system data to localStorage
        const existingResults = JSON.parse(localStorage.getItem('nexus_results') || '{}');
        localStorage.setItem('nexus_results', JSON.stringify({
          ...existingResults,
          patterns: data.patterns,
          dailyRoutine: data.dailyRoutine,
          systemTitle: data.systemTitle,
          coreRule: data.coreRule,
          firstStep: data.firstStep,
          warningToAvoid: data.warningToAvoid
        }));
        
        setLoading(false);
      } catch (err) {
        console.error('Error building system:', err);
        setLoading(false);
        // Fallback data
        const fallbackData = {
          systemTitle: i18n.language === 'ar' ? 'نظام المعالج العميق' : 'Deep Processor System',
          coreRule: i18n.language === 'ar'
            ? 'امنح عقلك الوقت الذي يحتاجه، لكن هيكل هذا الوقت بوضوح.'
            : 'Give your mind the time it needs, but structure this time clearly.',
          patterns: [
            {
              title: i18n.language === 'ar' ? 'وقت المعالجة' : 'Processing Time',
              meaning: i18n.language === 'ar'
                ? 'عقلك يحتاج وقتاً لمعالجة المعلومات بعمق'
                : 'Your mind needs time to process information deeply',
              tools: i18n.language === 'ar'
                ? ['حجز 30 دقيقة صباحاً للتفكير', 'كتابة الأفكار قبل القرار', 'تجنب القرارات السريعة']
                : ['Reserve 30 minutes morning for thinking', 'Write ideas before deciding', 'Avoid quick decisions']
            },
            {
              title: i18n.language === 'ar' ? 'إدارة المحفزات' : 'Stimulus Management',
              meaning: i18n.language === 'ar'
                ? 'المحفزات الكثيرة تستنزف طاقتك'
                : 'Many stimuli drain your energy',
              tools: i18n.language === 'ar'
                ? ['حدد وقتاً للقراءة والتصفح', 'أغفل الإشعارات أثناء العمل', 'خذ فترات راحة منتظمة']
                : ['Limit time for reading and browsing', 'Mute notifications during work', 'Take regular breaks']
            },
            {
              title: i18n.language === 'ar' ? 'التواصل العميق' : 'Deep Communication',
              meaning: i18n.language === 'ar'
                ? 'أنت تزدهر في المحادثات العميقة'
                : 'You thrive in deep conversations',
              tools: i18n.language === 'ar'
                ? ['ابحث عن أشخاص يفهمونك', 'تجنب الحديث السطحي', 'خصص وقتاً للنقاشات الجادة']
                : ['Find people who understand you', 'Avoid surface talk', 'Dedicate time for serious discussions']
            }
          ],
          dailyRoutine: {
            morning: i18n.language === 'ar'
              ? 'ابدأ بـ 30 دقيقة تفكير هادئ قبل أي شيء'
              : 'Start with 30 minutes of quiet thinking before anything',
            duringDay: i18n.language === 'ar'
              ? 'قسم المهام إلى أجزاء صغيرة وخذ فترات راحة'
              : 'Divide tasks into small parts and take breaks',
            evening: i18n.language === 'ar'
              ? 'راجع يومك واكتب أفكارك لليوم التالي'
              : 'Review your day and write ideas for tomorrow',
            weekly: i18n.language === 'ar'
              ? 'خصص وقتاً للتعلم العميق والتأمل'
              : 'Dedicate time for deep learning and reflection'
          },
          firstStep: i18n.language === 'ar'
            ? 'ابدأ غداً بحجز 30 دقيقة صباحاً للتفكير الهادئ قبل التحقق من هاتفك'
            : 'Start tomorrow by reserving 30 minutes in the morning for quiet thinking before checking your phone',
          warningToAvoid: i18n.language === 'ar'
            ? 'لا تحاول إجبار نفسك على القرارات السريعة — هذا ضد طبيعة عقلك'
            : 'Don\'t force yourself into quick decisions — this goes against your mind\'s nature'
        };
        setSystem(fallbackData);
        
        // Save fallback system data to localStorage
        const existingResults = JSON.parse(localStorage.getItem('nexus_results') || '{}');
        localStorage.setItem('nexus_results', JSON.stringify({
          ...existingResults,
          ...fallbackData
        }));
      }
    };

    fetchSystem();
  }, [answers, mindType, i18n.language, savedSystemData]);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert(i18n.language === 'ar' ? 'تم نسخ الرابط!' : 'Link copied!');
  };

  const handleReset = () => {
    if (i18n.language === 'ar' ? confirm('هل أنت متأكد أنك تريد حذف جميع بياناتك والبدء من جديد؟') : confirm('Are you sure you want to clear all your data and start fresh?')) {
      localStorage.removeItem('nexus_results');
      onRestart();
    }
  };

  if (loading) {
    return (
      <div className="page page-enter-active">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p className="loading-text">{t('system.loading')}</p>
        </div>
      </div>
    );
  }

  if (!system) return null;

  return (
    <div className="page page-enter-active">
      <div className="system-container">
        <div className="card system-card">
          <h1 className="system-title">{system.systemTitle}</h1>
          
          <div className="patterns-section">
            {system.patterns.map((pattern, index) => (
              <div key={index} className="pattern-card">
                <div 
                  className="pattern-header"
                  onClick={() => setExpandedPattern(expandedPattern === index ? null : index)}
                >
                  <h3 className="pattern-title">{pattern.title}</h3>
                  <span className="pattern-toggle">
                    {expandedPattern === index ? '−' : '+'}
                  </span>
                </div>
                {expandedPattern === index && (
                  <div className="pattern-content">
                    <p className="pattern-meaning">{pattern.meaning}</p>
                    <ul className="pattern-tools">
                      {pattern.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="tool-item">{tool}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="routine-section">
            <h3 className="section-title">{t('system.dailyRoutine')}</h3>
            <div className="routine-grid">
              <div className="routine-item">
                <h4 className="routine-label">{t('system.morning')}</h4>
                <p className="routine-text">{system.dailyRoutine.morning}</p>
              </div>
              <div className="routine-item">
                <h4 className="routine-label">{t('system.duringDay')}</h4>
                <p className="routine-text">{system.dailyRoutine.duringDay}</p>
              </div>
              <div className="routine-item">
                <h4 className="routine-label">{t('system.evening')}</h4>
                <p className="routine-text">{system.dailyRoutine.evening}</p>
              </div>
              <div className="routine-item">
                <h4 className="routine-label">{t('system.weekly')}</h4>
                <p className="routine-text">{system.dailyRoutine.weekly}</p>
              </div>
            </div>
          </div>
          
          <div className="first-step-box">
            <h4 className="first-step-title">{t('system.firstStep')}</h4>
            <p className="first-step-text">{system.firstStep}</p>
          </div>
          
          <div className="warning-box">
            <h4 className="warning-title">{t('system.warning')}</h4>
            <p className="warning-text">{system.warningToAvoid}</p>
          </div>
          
          <div className="core-rule-box">
            <p className="core-rule-text">"{system.coreRule}"</p>
          </div>
          
          <div className="system-actions">
            <button className="button secondary" onClick={handleShare}>
              {t('system.share')}
            </button>
            <button className="button secondary" onClick={handleReset}>
              {i18n.language === 'ar' ? 'إعادة تعيين' : 'Reset'}
            </button>
            <button className="button" onClick={onRestart}>
              {t('landing.button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalizedSystem;

import React from 'react';
import { useTranslation } from 'react-i18next';

function WelcomeBack({ savedData, onViewSystem, onRetakeTest }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="page page-enter-active landing-page">
      <img 
        src="https://i.imgur.com/jY8EoX4.jpg" 
        alt="" 
        className="landing-background"
      />
      <div className="landing-overlay"></div>
      <div className="landing-container">
        <div className="card landing-card">
          <h1 className="landing-title">
            {i18n.language === 'ar' ? 'أهلاً بعودتك' : 'Welcome Back'}
          </h1>
          <h2 className="landing-subtitle">
            {i18n.language === 'ar' 
              ? `نوع عقلك: ${savedData.mindTypeAR || savedData.mindType}`
              : `Your mind type: ${savedData.mindType}`
            }
          </h2>
          <p className="landing-description">
            {i18n.language === 'ar'
              ? 'لقد أكملت الاختبار بالفعل. يمكنك عرض نظامك الشخصي أو إعادة الاختبار.'
              : 'You have already completed the test. You can view your personalized system or retake the test.'
            }
          </p>
          <div className="welcome-back-actions">
            <button className="button" onClick={onViewSystem}>
              {i18n.language === 'ar' ? 'عرض نظامي' : 'View My System'}
            </button>
            <button className="button secondary" onClick={onRetakeTest}>
              {i18n.language === 'ar' ? 'إعادة الاختبار' : 'Retake the Test'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBack;

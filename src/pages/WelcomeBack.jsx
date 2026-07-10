import React from 'react';
import { useTranslation } from 'react-i18next';

function WelcomeBack({ savedData, onViewSystem, onRetakeTest }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="page page-enter-active welcome-back-page">
      <img 
        src="https://images.unsplash.com/photo-1515630278258-407f66498911?w=1920&q=80" 
        alt="" 
        className="welcome-back-background"
      />
      <div className="welcome-back-overlay"></div>
      <div className="welcome-back-container">
        <div className="welcome-back-popup">
          <div className="neon-border"></div>
          <h1 className="welcome-back-title">
            {i18n.language === 'ar' ? 'أهلاً بعودتك' : 'Welcome Back'}
          </h1>
          <h2 className="welcome-back-subtitle">
            {i18n.language === 'ar' 
              ? `نوع عقلك: ${savedData.mindTypeAR || savedData.mindType}`
              : `Your mind type: ${savedData.mindType}`
            }
          </h2>
          <p className="welcome-back-description">
            {i18n.language === 'ar'
              ? 'لقد أكملت الاختبار بالفعل. يمكنك عرض نظامك الشخصي أو إعادة الاختبار.'
              : 'You have already completed the test. You can view your personalized system or retake the test.'
            }
          </p>
          <div className="welcome-back-actions">
            <button className="button neon-button" onClick={onViewSystem}>
              {i18n.language === 'ar' ? 'عرض نظامي' : 'View My System'}
            </button>
            <button className="button secondary neon-secondary" onClick={onRetakeTest}>
              {i18n.language === 'ar' ? 'إعادة الاختبار' : 'Retake the Test'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBack;

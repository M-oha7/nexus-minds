import React from 'react';
import { useTranslation } from 'react-i18next';

function WelcomeBack({ savedData, onViewSystem, onRetakeTest }) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const mindType = isArabic
    ? savedData.mindTypeAR || savedData.mindType
    : savedData.mindType;

  return (
    <div className="page page-enter-active welcome-page">
      <div className="welcome-watermark" aria-hidden="true">
        Nexus Minds
      </div>
      <div className="welcome-container">
        <main className="welcome-panel">
          <p className="landing-logo">Nexus Minds</p>
          <h1 className="welcome-title">
            {isArabic ? 'أهلاً بعودتك' : 'Welcome back'}
          </h1>
          <p className="welcome-type">
            {isArabic ? `نوع عقلك: ${mindType}` : `Your mind type: ${mindType}`}
          </p>
          <p className="welcome-copy">
            {isArabic
              ? 'نتيجتك محفوظة. يمكنك فتح نظامك الشخصي أو إعادة الاختبار من البداية.'
              : 'Your result is saved. You can open your personal system or retake the test from the beginning.'}
          </p>
          <div className="welcome-back-actions">
            <button className="button" onClick={onViewSystem}>
              {isArabic ? 'عرض نظامي' : 'View my system'}
            </button>
            <button className="button secondary" onClick={onRetakeTest}>
              {isArabic ? 'إعادة الاختبار' : 'Retake the test'}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default WelcomeBack;

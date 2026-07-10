import React from 'react';
import { useTranslation } from 'react-i18next';

function Landing({ onStart }) {
  const { t } = useTranslation();

  return (
    <div className="page page-enter-active landing-page cinematic-landing">
      <img 
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" 
        alt="" 
        className="landing-background"
      />
      <div className="landing-overlay cinematic-overlay"></div>
      <div className="landing-container">
        <div className="card landing-card cinematic-card">
          <h1 className="landing-title cinematic-title">{t('landing.title')}</h1>
          <h2 className="landing-subtitle cinematic-subtitle">{t('landing.subtitle')}</h2>
          <p className="landing-description cinematic-description">{t('landing.description')}</p>
          <button className="button cinematic-button" onClick={onStart}>
            {t('landing.button')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;

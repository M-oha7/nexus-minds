import React from 'react';
import { useTranslation } from 'react-i18next';

function Landing({ onStart }) {
  const { t } = useTranslation();

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
          <h1 className="landing-title">{t('landing.title')}</h1>
          <h2 className="landing-subtitle">{t('landing.subtitle')}</h2>
          <p className="landing-description">{t('landing.description')}</p>
          <button className="button" onClick={onStart}>
            {t('landing.button')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;

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
          
          {/* Mission & Vision */}
          <div className="landing-mission-section">
            <div className="mission-box">
              <h3 className="mission-title">{t('landing.mission')}</h3>
              <p className="mission-text">{t('landing.missionText')}</p>
            </div>
            <div className="vision-box">
              <h3 className="vision-title">{t('landing.vision')}</h3>
              <p className="vision-text">{t('landing.visionText')}</p>
            </div>
          </div>
          
          {/* Problem */}
          <div className="landing-problem-section">
            <h3 className="problem-title">{t('landing.problem')}</h3>
            <p className="problem-text">{t('landing.problemText')}</p>
          </div>
          
          {/* Core Idea */}
          <div className="landing-core-section">
            <h3 className="core-title">{t('landing.coreIdea')}</h3>
            <p className="core-text">{t('landing.coreIdeaText')}</p>
          </div>
          
          {/* Principles */}
          <div className="landing-principles-section">
            <h3 className="principles-title">{t('landing.principles')}</h3>
            <ul className="principles-list">
              {t('landing.principlesList').map((principle, index) => (
                <li key={index} className="principle-item">{principle}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    testDate: null,
    daysSince: 0,
    challengeProgress: 'not_started',
    challengeDay: 0,
    tipsViewed: 0,
    systemsBuilt: 0,
    mindType: '',
    streak: 0
  });

  useEffect(() => {
    // Load user stats from localStorage
    const results = localStorage.getItem('nexus_results');
    const challenge = localStorage.getItem('nexus_challenge');
    const tips = localStorage.getItem('nexus_tips_viewed');
    
    if (results) {
      const data = JSON.parse(results);
      const testDate = new Date(data.timestamp);
      const today = new Date();
      const daysSince = Math.floor((today - testDate) / (1000 * 60 * 60 * 24));
      
      // Calculate streak (consecutive days visited)
      const lastVisit = localStorage.getItem('nexus_last_visit');
      const todayStr = today.toDateString();
      let streak = parseInt(localStorage.getItem('nexus_streak') || '0');
      
      if (lastVisit !== todayStr) {
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastVisit === yesterday.toDateString()) {
          streak++;
        } else if (lastVisit !== todayStr) {
          streak = 1;
        }
        
        localStorage.setItem('nexus_last_visit', todayStr);
        localStorage.setItem('nexus_streak', streak.toString());
      }
      
      setStats({
        testDate: testDate,
        daysSince: daysSince,
        challengeProgress: challenge ? (JSON.parse(challenge).challengeCompleted ? 'completed' : 'in_progress') : 'not_started',
        challengeDay: challenge ? JSON.parse(challenge).currentDay : 0,
        tipsViewed: tips ? JSON.parse(tips).count : 0,
        systemsBuilt: data.patterns ? 1 : 0,
        mindType: data.mindType || '',
        streak: streak
      });
    }
  }, []);

  const getChallengeStatus = () => {
    switch (stats.challengeProgress) {
      case 'completed':
        return t('system.dashboard.challengeCompleted');
      case 'in_progress':
        return `${t('system.dashboard.challengeInProgress')} - Day ${stats.challengeDay}/7`;
      default:
        return t('system.dashboard.challengeNotStarted');
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString(i18n.language === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="page page-enter-active">
      <div className="dashboard-container">
        <div className="card dashboard-card">
          <h1 className="dashboard-title">{t('system.dashboard.title')}</h1>
          
          <div className="dashboard-grid">
            {/* Mind Type Card */}
            <div className="stat-card primary">
              <div className="stat-icon">🧠</div>
              <div className="stat-content">
                <h3 className="stat-label">{t('system.dashboard.mindType')}</h3>
                <p className="stat-value">{stats.mindType}</p>
              </div>
            </div>
            
            {/* Streak Card */}
            <div className="stat-card accent">
              <div className="stat-icon">🔥</div>
              <div className="stat-content">
                <h3 className="stat-label">{t('system.dashboard.streak')}</h3>
                <p className="stat-value">{stats.streak} {i18n.language === 'ar' ? 'يوم' : 'days'}</p>
              </div>
            </div>
            
            {/* Days Since Card */}
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-content">
                <h3 className="stat-label">{t('system.dashboard.daysSince')}</h3>
                <p className="stat-value">{stats.daysSince}</p>
              </div>
            </div>
            
            {/* Challenge Progress Card */}
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-content">
                <h3 className="stat-label">{t('system.dashboard.challengeProgress')}</h3>
                <p className="stat-value">{getChallengeStatus()}</p>
              </div>
            </div>
            
            {/* Tips Viewed Card */}
            <div className="stat-card">
              <div className="stat-icon">💡</div>
              <div className="stat-content">
                <h3 className="stat-label">{t('system.dashboard.tipsViewed')}</h3>
                <p className="stat-value">{stats.tipsViewed}</p>
              </div>
            </div>
            
            {/* Systems Built Card */}
            <div className="stat-card">
              <div className="stat-icon">⚙️</div>
              <div className="stat-content">
                <h3 className="stat-label">{t('system.dashboard.systemsBuilt')}</h3>
                <p className="stat-value">{stats.systemsBuilt}</p>
              </div>
            </div>
          </div>
          
          {/* Test Date */}
          {stats.testDate && (
            <div className="test-date-section">
              <p className="test-date-text">
                {t('system.dashboard.testDate')}: {formatDate(stats.testDate)}
              </p>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="dashboard-actions">
            <button className="button" onClick={() => navigate('/challenge')}>
              {t('system.dashboard.viewChallenge')}
            </button>
            <button className="button secondary" onClick={() => navigate('/system')}>
              {t('system.dashboard.viewSystem')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

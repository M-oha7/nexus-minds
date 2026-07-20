import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Challenge({ mindType }) {
  const { t, i18n } = useTranslation();
  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState([]);
  const [challengeStarted, setChallengeStarted] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  useEffect(() => {
    // Load challenge progress from localStorage
    const savedChallenge = localStorage.getItem('nexus_challenge');
    if (savedChallenge) {
      const challengeData = JSON.parse(savedChallenge);
      setCurrentDay(challengeData.currentDay);
      setCompletedDays(challengeData.completedDays || []);
      setChallengeStarted(challengeData.challengeStarted || false);
      setChallengeCompleted(challengeData.challengeCompleted || false);
    }
  }, []);

  const startChallenge = () => {
    setChallengeStarted(true);
    setCurrentDay(1);
    setCompletedDays([]);
    setChallengeCompleted(false);
    localStorage.setItem('nexus_challenge', JSON.stringify({
      currentDay: 1,
      completedDays: [],
      challengeStarted: true,
      challengeCompleted: false,
      startDate: new Date().toISOString()
    }));
  };

  const completeDay = (day) => {
    const newCompletedDays = [...completedDays, day];
    setCompletedDays(newCompletedDays);
    
    const nextDay = day + 1;
    const isComplete = nextDay > 7;
    
    if (isComplete) {
      setChallengeCompleted(true);
      setCurrentDay(7);
    } else {
      setCurrentDay(nextDay);
    }

    localStorage.setItem('nexus_challenge', JSON.stringify({
      currentDay: isComplete ? 7 : nextDay,
      completedDays: newCompletedDays,
      challengeStarted: true,
      challengeCompleted: isComplete,
      startDate: localStorage.getItem('nexus_challenge') 
        ? JSON.parse(localStorage.getItem('nexus_challenge')).startDate 
        : new Date().toISOString()
    }));
  };

  const resetChallenge = () => {
    setCurrentDay(1);
    setCompletedDays([]);
    setChallengeStarted(false);
    setChallengeCompleted(false);
    localStorage.removeItem('nexus_challenge');
  };

  const days = [
    { day: 1, title: t('system.challenge.day1'), task: t('system.challenge.task1') },
    { day: 2, title: t('system.challenge.day2'), task: t('system.challenge.task2') },
    { day: 3, title: t('system.challenge.day3'), task: t('system.challenge.task3') },
    { day: 4, title: t('system.challenge.day4'), task: t('system.challenge.task4') },
    { day: 5, title: t('system.challenge.day5'), task: t('system.challenge.task5') },
    { day: 6, title: t('system.challenge.day6'), task: t('system.challenge.task6') },
    { day: 7, title: t('system.challenge.day7'), task: t('system.challenge.task7') }
  ];

  if (!challengeStarted) {
    return (
      <div className="page page-enter-active">
        <div className="challenge-container">
          <div className="card challenge-card">
            <h1 className="challenge-title">{t('system.challenge.title')}</h1>
            <p className="challenge-subtitle">{t('system.challenge.subtitle')}</p>
            
            <div className="challenge-intro">
              <p className="challenge-description">
                {i18n.language === 'ar' 
                  ? 'هذا التحدي مصمم خصيصاً لنوع عقلك. كل يوم لديك مهمة بسيطة ستساعدك على فهم عقلك بشكل أفضل واستخدام نقاط قوتك.'
                  : 'This challenge is designed specifically for your mind type. Each day you have a simple task that will help you understand your mind better and use your strengths.'}
              </p>
            </div>
            
            <button className="button" onClick={startChallenge}>
              {t('system.challenge.start')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page page-enter-active">
      <div className="challenge-container">
        <div className="card challenge-card">
          <div className="challenge-header">
            <h1 className="challenge-title">{t('system.challenge.title')}</h1>
            {challengeCompleted ? (
              <div className="challenge-complete-badge">
                {t('system.challenge.complete')}
              </div>
            ) : (
              <div className="challenge-progress">
                {t('system.challenge.progress').replace('{day}', currentDay)}
              </div>
            )}
          </div>

          <div className="challenge-days">
            {days.map((dayData) => {
              const isCompleted = completedDays.includes(dayData.day);
              const isCurrent = dayData.day === currentDay && !challengeCompleted;
              const isLocked = dayData.day > currentDay && !challengeCompleted;
              
              return (
                <div 
                  key={dayData.day} 
                  className={`challenge-day ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''}`}
                >
                  <div className="day-header">
                    <span className="day-number">{dayData.day}</span>
                    <span className="day-title">{dayData.title}</span>
                    {isCompleted && <span className="day-status">✓</span>}
                    {isLocked && <span className="day-status">🔒</span>}
                  </div>
                  
                  <p className="day-task">{dayData.task}</p>
                  
                  {isCurrent && !challengeCompleted && (
                    <button 
                      className="button complete-day-button" 
                      onClick={() => completeDay(dayData.day)}
                    >
                      {i18n.language === 'ar' ? 'أكمل اليوم' : 'Complete Day'}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {challengeCompleted && (
            <div className="challenge-celebration">
              <h2 className="celebration-title">
                {i18n.language === 'ar' ? '🎉 مبروك!' : '🎉 Congratulations!'}
              </h2>
              <p className="celebration-text">
                {i18n.language === 'ar'
                  ? 'لقد أكملت تحدي العقل 7 أيام. أنت الآن على دراية أفضل بكيفية عمل عقلك.'
                  : 'You have completed the 7-day mind challenge. You now have a better understanding of how your mind works.'}
              </p>
              <button className="button secondary" onClick={resetChallenge}>
                {i18n.language === 'ar' ? 'إعادة التحدي' : 'Restart Challenge'}
              </button>
            </div>
          )}

          <button className="button secondary" onClick={resetChallenge}>
            {i18n.language === 'ar' ? 'إعادة تعيين' : 'Reset'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Challenge;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Analytics } from '@vercel/analytics/react';
import './i18n';
import './index.css';
import Landing from './pages/Landing';
import WelcomeBack from './pages/WelcomeBack';
import DeepTest from './pages/DeepTest';
import Results from './pages/Results';
import PersonalizedSystem from './pages/PersonalizedSystem';
import Challenge from './pages/Challenge';
import Dashboard from './pages/Dashboard';

function App() {
  const { i18n } = useTranslation();
  const [answers, setAnswers] = useState([]);
  const [mindType, setMindType] = useState(null);
  const [savedData, setSavedData] = useState(null);
  const [showWelcomeBack, setShowWelcomeBack] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const addAnswer = (tag) => {
    setAnswers([...answers, tag]);
  };

  return (
    <Router>
      <AppContent
        toggleLanguage={toggleLanguage}
        answers={answers}
        addAnswer={addAnswer}
        mindType={mindType}
        setMindType={setMindType}
        savedData={savedData}
        setSavedData={setSavedData}
        showWelcomeBack={showWelcomeBack}
        setShowWelcomeBack={setShowWelcomeBack}
      />
    </Router>
  );
}

function AppContent({ toggleLanguage, answers, addAnswer, mindType, setMindType, savedData, setSavedData, showWelcomeBack, setShowWelcomeBack }) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    // Check for saved results on initial load
    const savedResults = localStorage.getItem('nexus_results');
    if (savedResults) {
      const data = JSON.parse(savedResults);
      setSavedData(data);
      setShowWelcomeBack(true);
    }
  }, []);

  const resetTest = () => {
    localStorage.removeItem('nexus_results');
    setSavedData(null);
    setShowWelcomeBack(false);
    setAnswers([]);
    setMindType(null);
    navigate('/');
    window.location.reload();
  };

  const handleViewSystem = () => {
    if (savedData) {
      setMindType(savedData.mindType);
      setAnswers(savedData.answers || []);
      setShowWelcomeBack(false);
      navigate('/system');
    }
  };

  const getSavedSystemData = () => {
    if (savedData && savedData.patterns) {
      return savedData;
    }
    return null;
  };

  const handleRetakeTest = () => {
    localStorage.removeItem('nexus_results');
    setSavedData(null);
    setShowWelcomeBack(false);
    setAnswers([]);
    navigate('/test');
  };

  return (
    <div className="app">
      <button className="language-toggle" onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'AR' : 'EN'}
      </button>

      <Routes>
        <Route 
          path="/" 
          element={
            showWelcomeBack && savedData ? (
              <WelcomeBack 
                savedData={savedData}
                onViewSystem={handleViewSystem}
                onRetakeTest={handleRetakeTest}
              />
            ) : (
              <Landing onStart={() => navigate('/test')} />
            )
          } 
        />
        <Route 
          path="/test" 
          element={
            <DeepTest 
              answers={answers}
              addAnswer={addAnswer}
              onComplete={() => navigate('/results')}
            />
          } 
        />
        <Route 
          path="/results" 
          element={
            <Results 
              answers={answers}
              mindType={mindType}
              setMindType={setMindType}
              onBuildSystem={() => navigate('/system')}
            />
          } 
        />
        <Route 
          path="/system" 
          element={
            <PersonalizedSystem 
              answers={savedData?.answers || answers}
              mindType={mindType}
              savedData={savedData}
              onRestart={resetTest}
              savedSystemData={getSavedSystemData()}
              onStartChallenge={() => navigate('/challenge')}
              onViewDashboard={() => navigate('/dashboard')}
            />
          } 
        />
        <Route 
          path="/challenge" 
          element={
            <Challenge 
              mindType={mindType}
            />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <Dashboard />
          } 
        />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;

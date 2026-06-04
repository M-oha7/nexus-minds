import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import './index.css';
import Landing from './pages/Landing';
import DeepTest from './pages/DeepTest';
import Results from './pages/Results';
import PersonalizedSystem from './pages/PersonalizedSystem';

function App() {
  const { i18n } = useTranslation();
  const [answers, setAnswers] = useState([]);
  const [mindType, setMindType] = useState(null);

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
      />
    </Router>
  );
}

function AppContent({ toggleLanguage, answers, addAnswer, mindType, setMindType }) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const resetTest = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="app">
      <button className="language-toggle" onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'AR' : 'EN'}
      </button>

      <Routes>
        <Route path="/" element={<Landing onStart={() => navigate('/test')} />} />
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
              answers={answers}
              mindType={mindType}
              onRestart={resetTest}
            />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;

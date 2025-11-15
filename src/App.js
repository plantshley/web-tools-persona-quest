import React, { useEffect } from 'react';
import PersonalityQuizApp from './components/PersonalityQuiz_tableVer';
import { initGA, logPageView } from './utils/analytics';

function App() {
  useEffect(() => {
    // Initialize Google Analytics when the app loads
    initGA();
    // Log initial page view
    logPageView(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <PersonalityQuizApp />
    </div>
  );
}

export default App;
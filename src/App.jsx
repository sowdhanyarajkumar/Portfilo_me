import React, { useState } from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import CenterContent from './components/CenterContent';
import WelcomeScreen from './components/WelcomeScreen';
import './index.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <WelcomeScreen onStart={() => setShowWelcome(false)} />;
  }

  return (
    <div className="app-container" style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <LeftSidebar />
      <CenterContent />
      <RightSidebar />
    </div>
  );
}

export default App;

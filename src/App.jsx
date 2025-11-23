import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import CenterContent from './components/CenterContent';
import './index.css';

function App() {
  return (
    <div className="app-container" style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <LeftSidebar />
      <CenterContent />
      <RightSidebar />
    </div>
  );
}

export default App;

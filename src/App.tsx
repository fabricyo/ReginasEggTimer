import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import TimerScreen from './screens/TimerScreen.tsx';
import FinishScreen from './screens/FinishScreen.tsx';
import './App.css';

const App: React.FC = () => {
  return (
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timer" element={<TimerScreen />} />
            <Route path="/finish" element={<FinishScreen />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
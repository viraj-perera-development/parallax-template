import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MinimalPage from './pages/MinimalPage';
import SmokePage from './pages/SmokePage';
import WaterPage from './pages/WaterPage';
import Test from './pages/Test';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/template-minimal" element={<MinimalPage />} />
          <Route exact path="/template-smoke" element={<SmokePage />} />
          <Route exact path="/template-water" element={<WaterPage />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

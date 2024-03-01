import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import TemplateOne from './pages/TemplateOne';
import SmokePage from './pages/SmokePage';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/template-one" element={<TemplateOne />} />
          <Route exact path="/template-smoke" element={<SmokePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

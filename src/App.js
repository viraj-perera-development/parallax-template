import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MinimalPage from './pages/MinimalPage';
import SmokePage from './pages/SmokePage';
import WaterPage from './pages/WaterPage';
import Azienda from './pages/Azienda';
import Notizie from './pages/Notizie';
import Prodotti from './pages/Prodotti';
import CollaboraConNoi from './pages/CollaboraConNoi';
import Faq from './pages/Faq';
import Contatti from './pages/Contatti';
import Lingotto from './singlePage/Lingotto'; 
import Demo from './pages/Demo';
import Demo2 from './pages/Demo2';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/azienda" element={<Azienda />} />
          <Route exact path="/notizie" element={<Notizie />} />
          <Route exact path="/prodotti" element={<Prodotti />} />
          <Route exact path="/collabora-con-noi" element={<CollaboraConNoi />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/contatti" element={<Contatti />} />
          <Route exact path="/template-minimal" element={<MinimalPage />} />
          <Route exact path="/template-smoke" element={<SmokePage />} />
          <Route exact path="/template-water" element={<WaterPage />} />
          <Route exact path="/lingotto" element={<Lingotto />} />
          <Route exact path="/demo" element={<Demo />} />
          <Route exact path="/demo2" element={<Demo2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

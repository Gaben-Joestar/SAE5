import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
import Inscription from './pages/Inscription';
import Partie from './pages/Partie';
import Paiement from './pages/Paiement';
import AjoutQuestion from './pages/AjoutQuestion';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/partie' element={<Partie />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/paiement' element={<Paiement />} />
        <Route path='/ajout-question' element={<AjoutQuestion />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

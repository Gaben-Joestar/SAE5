import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Home from './pages/Home';
<<<<<<< HEAD
=======
import Inscription from './pages/Inscription';
>>>>>>> 5ddd072af800e9464996a642357ca2b309ee48ec
import Partie from './pages/Partie';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/partie" element={<Partie />} />
        <Route path="*" element={<Home />} />
=======
        <Route path='/' element={<Home />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/partie' element={<Partie />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='*' element={<Home />} />
>>>>>>> 5ddd072af800e9464996a642357ca2b309ee48ec
      </Routes>
    </BrowserRouter>
  );
};

export default App;

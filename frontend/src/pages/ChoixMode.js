import React, { useState } from 'react';
import Header from '../components/Header';
import ChoixTheme from '../components/ChoixTheme';
import CardTheme from '../components/CardTheme';
import AddCardTheme from '../components/AddCardTheme';

const ChoixMode = () => {
  const [mode, setMode] = useState([1, 1, 1]);

  return (
    <div>
      <Header />
      {mode.length === 0 ? (
        <div className='flex flex-row justify-center items-center mt-40 space-x-10'>
          <img
            src='./img/un_joueur.png'
            alt='un-joueur'
            className='w-52 hover:cursor-pointer'
            id='1'
            onClick={() => setMode([mode, 1])}
          ></img>
          <img
            src='./img/plusieurs-joueurs.png'
            alt='multi-joueur'
            className='w-52 hover:cursor-pointer'
            id='2'
            onClick={() => setMode([mode, 2])}
          ></img>
        </div>
      ) : mode.length - 1 === 1 ? (
        <div className='flex flex-col justify-center items-center mt-16 space-y-10'>
          <ChoixTheme text={'Nos thèmes de Quizz'} bg_color='cyan' />
          <ChoixTheme text={'Mes Quizz personnalisés'} bg_color='grey-brown' />
        </div>
      ) : (
        <div className='flex flex-col mt-16 ml-48 mr-16'>
          <p className='text-5xl font-bold text-grey'>
            Mes Quizz personnalisés
          </p>
          <div className='flex flex-col space-y-20'>
            <div className='flex flex-row space-x-8 w-11/12 h-10 mt-8'>
              <CardTheme />
              <CardTheme />
              <CardTheme />
              <CardTheme />
            </div>
            <div className='flex flex-row space-x-8 w-11/12 h-10 mt-8'>
              <CardTheme />
              <CardTheme />
              <AddCardTheme />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChoixMode;

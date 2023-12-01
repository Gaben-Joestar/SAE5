import React, { useState } from 'react';
import Header from '../components/Header';

const Rejoindre = () => {
  const [exist, setExist] = useState(true);
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center mt-20 '>
        <h1 className='text-5xl text-grey inter-semi-bold '>
          REJOINDRE UNE PARTIE
        </h1>
        <p className='text-xl'>
          Rejoignez la partie en rentrant le code fournit par l'hôte
        </p>
        <div className={!exist && 'text-red'}>
          <input
            id='saisie-code'
            className='rounded-2xl drop-shadow-md w-60 py-1 px-2 mt-20 bg-light-grey font-bold uppercase pl-14 text-3xl tracking-verywide'
            name='saisie-code'
            maxLength='5'
            onChange={() => setExist(true)}
          ></input>
        </div>
        {!exist && (
          <p className='text-red'>
            Il semble que le code fournit est invalide ou expiré
          </p>
        )}

        <div className='text-2xl mt-28'>
          <button
            className='px-5 py-1.5 bg-grey rounded-3xl text-white'
            onClick={() => setExist(false)}
          >
            Rejoindre
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rejoindre;

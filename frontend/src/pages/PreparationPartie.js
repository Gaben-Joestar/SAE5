import React, { useState } from 'react';
import Header from '../components/Header';
import SmallerCardTheme from '../components/SmallerCardTheme';
import LargestButton from '../components/LargestButton';
import CodePartie from '../components/CodePartie';
import IconeJoueurGrande from '../components/IconeJoueurGrande';
import Button from '../components/Button';

const PreparationPartie = () => {
  const [page, setPage] = useState(1);
  const [code, setCode] = useState('AAAAA');

  const genererCode = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';

    for (let i = 0; i < 5; i++) {
      const caractereAleatoire = caracteres.charAt(
        Math.floor(Math.random() * caracteres.length),
      );
      code += caractereAleatoire;
    }

    return code;
  };
  const creationLobby = () => {
    console.log('111');
    console.log('cliquer');
    setCode(genererCode);
    setPage(page + 1);
  };

  return (
    <div>
      <Header />
      <div className='flex flex-col items-center mt-8'>
        <h1 className='inter-extra-bold text-grey leading-8'>
          PREPARATION DE LA PARTIE
        </h1>
        {page === 1 ? (
          <div className='flex flex-col items-center'>
            <div className='w-max'>
              <p>Paramètres de la partie</p>
              <div className='mt-14'>
                <SmallerCardTheme />
              </div>
            </div>
            <p className='mt-14 text-xl text-grey inter-medium'>
              Sélectionner les mini-jeux présent durant la partie
            </p>
            <div className='space-x-10 flex flex-row'>
              <div className='space-x-1'>
                <input type='checkbox' id='4reponses' name='4reponses' />
                <label for='4reponses'>4 réponses</label>
              </div>
              <div className='space-x-1'>
                <input type='checkbox' id='intrus' name='intrus' />
                <label for='intrus'>Intrus</label>
              </div>
              <div className='space-x-1'>
                <input type='checkbox' id='pendu' name='pendu' />
                <label for='pendu'>Pendu</label>
              </div>
              <div className='space-x-1'>
                <input type='checkbox' id='carte' name='carte' />
                <label for='carte'>Carte</label>
              </div>
            </div>
            <div className='mt-14 rounded-3xl' onClick={() => creationLobby()}>
              <LargestButton text={'Générer le code'} />
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-center relative'>
            <p>Rejoignez la partie en rentrant le code</p>
            <div className='mt-5'>
              <CodePartie code={code} />
            </div>
            <div className='flex gap-8 mt-8'>
              <IconeJoueurGrande
                color='red'
                isReady={true}
                isLogged={true}
                numeroJoueur='1'
              />
              <IconeJoueurGrande
                color='yellow'
                isLogged={true}
                isReady={false}
                numeroJoueur='2'
              />
              <IconeJoueurGrande
                color='purple'
                isLogged={false}
                isReady={false}
                numeroJoueur='3'
              />
              <IconeJoueurGrande
                color='green'
                isLogged={false}
                isReady={false}
                numeroJoueur='4'
              />
            </div>
            <Button
              text={'Commencer'}
              className={
                'px-12 text-xl mt-10 absolute right-0 bottom-0 translate-y-28'
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreparationPartie;

import React, { useState } from 'react';
import Header from '../components/Header';
import SmallerCardTheme from '../components/SmallerCardTheme';
import LargestButton from '../components/LargestButton';
import { useNavigate } from 'react-router-dom';

const PreparationPartie = () => {
  const [code, setCode] = useState('AAAAA');
  const navigate = useNavigate();

  const genererCode = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';

    for (let i = 0; i < 5; i++) {
      const caractereAleatoire = caracteres.charAt(
        Math.floor(Math.random() * caracteres.length),
      );
      code += caractereAleatoire;
    }

    return new Promise((resolve, reject) => {
      // Logique de génération de code
      resolve(code);
      // ou reject(error) en cas d'erreur
    });
  };
  const creationLobby = async () => {
    try {
      const code = await genererCode();
      setCode(code);
      await handleCreateLobby(code);

      navigate(`/lobby/${code}`);
      // Le reste du code après que handleCreateLobby soit terminé
    } catch (error) {
      // Gérer les erreurs ici
    }
  };
  const handleCreateLobby = async (code) => {
    try {
      const response = await fetch('http://localhost:3000/partie/creer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          code_partie: code,
          nb_question: 20,
          hote: 'Gabininho',
        }),
      });

      if (response.ok) {
        const data = await response.json();

        console.log('Utilisateur créé avec succès :', data);
        // Mettez à jour l'interface utilisateur ou effectuez d'autres actions nécessaires.
      } else {
        const errorData = await response.json();
        console.error(
          "Erreur lors de la création de l'utilisateur :",
          errorData,
        );
        // Gérez l'erreur, par exemple, affichez un message d'erreur à l'utilisateur.
      }
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
      // Gérez les erreurs lors de l'envoi de la requête.
    }
  };

  return (
    <div>
      <Header />
      <div className='flex flex-col items-center mt-8'>
        <h1 className='inter-extra-bold text-grey leading-8'>
          PREPARATION DE LA PARTIE
        </h1>
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
      </div>
    </div>
  );
};

export default PreparationPartie;

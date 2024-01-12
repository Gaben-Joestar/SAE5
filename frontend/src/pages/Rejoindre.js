import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const Rejoindre = () => {
  const [exist, setExist] = useState(true);
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const handleCodeChange = (e) => {
    setCode(e.target.value.toUpperCase());
    setExist(true);
  };

  const handleUseCode = async (code) => {
    try {
      const response = await fetch('http://localhost:3000/partie/rejoindre', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          code: code,
          token: 'anto',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Partie rejoint', data);
        navigate(`/lobby/${code}`);
        // Mettez à jour l'interface utilisateur ou effectuez d'autres actions nécessaires.
      } else {
        const errorData = await response.json();
        console.error('Partie non rejoint', errorData);
        setExist(false);
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
            onChange={handleCodeChange}
          ></input>
        </div>
        {!exist && (
          <p className='text-red mt-2'>
            Il semble que le code fournit est invalide ou expiré
          </p>
        )}

        <div className={`text-2xl ${exist ? 'mt-24' : 'mt-16'}`}>
          <button
            className='px-5 py-1.5 bg-grey rounded-3xl text-white'
            onClick={() => handleUseCode(code)}
          >
            Rejoindre
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rejoindre;

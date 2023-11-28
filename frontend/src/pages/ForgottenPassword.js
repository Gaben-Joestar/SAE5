import React, { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const ForgottenPassword = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [infos, setInfos] = useState([]);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setIsValid(validateEmail(inputValue));
  };

  const sendInfos = () => {
    if (isValid) {
      setInfos([infos, document.getElementById('insert-email').value()]);
    }
  };

  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center items-center mt-28 text-grey '>
        <p className='text-3xl inter-extra-bold'>MOT DE PASSE OUBLIE</p>

        {infos.length === 0 ? (
          <div>
            <p className='inter-medium'>Pas de panique</p>
            <p className='mt-8 text-clip w-128'>
              Veuillez saisir l'adresse e-mail associée au compte pour lequel
              vous avez perdu le mot de passe.
            </p>
            <input
              id='insert-email'
              className='rounded-2xl drop-shadow-md w-128 py-1 px-2 mt-6 mb-16 pl-2'
              name='insert-email'
              onChange={handleInputChange}
            ></input>
            <Button text={'Envoyer code'} isActive={isValid} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ForgottenPassword;

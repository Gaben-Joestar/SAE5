import React, { useState } from 'react';
import Header from '../components/Header';
import LargestButton from '../components/LargestButton';
import { Link } from 'react-router-dom';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [connexionError, setConnexionError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConnexion = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/connexion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          email: email,
          mdp: password,
        }),
      });

      if (response.ok) {
        // E-mail et mot de passe sont bons
        creerCookie(response.token, 5);
        window.location.href = '/'
      } else {
        // E-mail bon mais pas mot de passe
        const errorData = await response.json();
        setConnexionError(errorData.message);
      }
    } catch (error) {
      setConnexionError('Une erreur est survenue. Veuillez réessayer plus tard');
    }
  }

  const creerCookie = (token, nbJours) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + nbJours);

    document.cookie = `jwt=${token}; expires=${expirationDate.toUTCString()}; path=/`;
  };

  const isDisabled = !email || !password;

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-10">
        <img src="./img/grand-logo.PNG" alt="logo" className="w-3/12" />
        <div className="inter-semi-bold text-black mt-6">
          <div>
            <label htmlFor="connexion" className="block mb-1">
              Email
            </label>
            <input
              id="email-pseudo"
              className="rounded-2xl drop-shadow-md w-128 py-1 px-2"
              name="email-pseudo"
              onChange={handleEmailChange}
            ></input>

            <label htmlFor="connexion" className="block mb-1 mt-4">
              Mot de passe
            </label>
            <input
              type='password'
              id="password"
              className="rounded-2xl drop-shadow-md w-128 py-1 px-2"
              name="password"
              onChange={handlePasswordChange}
            ></input>
          </div>
          <div className="flex items-center justify-between mt-4 text-light-grey text-xs">
            <label htmlFor="souvenir" className="flex items-center">
              <input
                type="checkbox"
                id="souvenir"
                name="souvenir"
                className="mr-2 accent-light-grey"
              ></input>
              Se souvenir de moi
            </label>
            <Link to="/mot-de-passe-oublie">
              <p className="underline">Mot de passe oublié ?</p>
            </Link>
          </div>
        </div>
        {connexionError && <p className=" text-red pt-3">{connexionError}</p>}
        <div className="mt-5">
          <LargestButton text="Connexion" onClick={handleConnexion} disabled={isDisabled} />
        </div>
        <div className="flex items-center justify-between mt-4 text-light-grey text-xs">
          <div className="h-px bg-light-grey mr-3 mt-1 w-56"></div>
          or
          <div className="h-px bg-light-grey ml-3 mt-1 w-56"></div>
        </div>

        <div className="flex items-center justify-between mt-4 w-60 text-light-grey text-xs">
          <img
            src="./img/facebook-logo.png"
            alt="logo-facebook"
            className="w-10"
          />
          <img src="./img/google-logo.png" alt="logo-google" className="w-10" />
          <img src="./img/apple-logo.png" alt="logo-apple" className="w-10" />
        </div>
        <Link to="/inscription" className="mt-5">
          <p className="text-light-grey underline">
            Pas de compte ? S’inscrire
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Connexion;

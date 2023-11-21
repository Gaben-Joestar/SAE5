import React from 'react';
import Header from '../components/Header';
import LargestButton from '../components/LargestButton';

const Connexion = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-10">
        <img src="./img/grand-logo.PNG" alt="logo" className="w-3/12" />
        <div className="inter-semi-bold text-black mt-6">
          <div>
            <label htmlFor="connexion" className="block mb-1">
              Email ou pseudo
            </label>
            <input
              id="email-pseudo"
              className="rounded-2xl drop-shadow-md w-128 py-1"
              name="email-pseudo"
            ></input>

            <label htmlFor="connexion" className="block mb-1 mt-4">
              Mot de passe
            </label>
            <input
              id="password"
              className="rounded-2xl drop-shadow-md w-128 py-1"
              name="password"
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
            <p className="underline">Mot de passe oublié ?</p>
          </div>
        </div>
        <div className="mt-5">
          <LargestButton text="Connexion" />
        </div>
        <p>--------------------------- or ---------------------------</p>
      </div>
    </div>
  );
};

export default Connexion;

import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const jwtCookie = getCookie("jwt");
    setIsConnected(!!jwtCookie);
  }, []);

  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return cookieValue;
      }
    }
    return null;
  };

  // Supprimer le cookie quand on clique sur 'Deconnexion'
  const deleteCookie = () => {
    const expirationDate = new Date(0);
    document.cookie = 'jwt=; expires=' + expirationDate.toUTCString() + '; path=/';
  };


  return (
    <div className="flex justify-between items-center my-3 inter-semi-bold ">
      <div className="flex items-center text-grey">
        <Link to="/"><img src="./img/petit-logo.PNG" alt="Petit logo" className="mr-4 ml-4 w-21 h-16" /></Link>
        <Link to="/rejoindre" className="ml-20">Rejoindre</Link>
        <Link to="/prix" className="ml-20">Prix</Link>
        <Link to="/ajout-question" className="ml-20">Proposer une Question</Link>
      </div>
      {!isConnected ? (
        <div className="flex items-center mr-8">
          <Link to="/connexion" className="mr-5">Connexion</Link>
          <Link to="/inscription"><Button text='Inscription' /></Link>
        </div>
      ) : (
        <div className="flex items-center mr-8">
          <a href="/" className="mr-5" onClick={() => deleteCookie()}>Déconnexion</a>
          <img src="./img/petit-logo.PNG" alt="Petit logo" className=" w-12 h-8" />
        </div>
      )}


    </div>
  );
};

export default Header;


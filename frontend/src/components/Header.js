import React, { useState, useEffect } from "react";
import Button from "./Button";
import { NavLink } from 'react-router-dom';

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
        <NavLink to="/"><img src="./img/petit-logo.PNG" alt="Petit logo" className="mr-4 ml-4 w-21 h-16" /></NavLink>
        <NavLink to="/rejoindre" className="ml-20 " style={({ isActive }) => { return isActive ? { color: "#C6DFDF" } : {}; }}>Rejoindre</NavLink>
        <NavLink to="/prix" className="ml-20" style={({ isActive }) => { return isActive ? { color: "#C6DFDF" } : {}; }}>Prix</NavLink>
        <NavLink to="/ajout-question" className="ml-20" style={({ isActive }) => { return isActive ? { color: "#C6DFDF" } : {}; }}>Proposer une Question</NavLink>
      </div>
      {!isConnected ? (
        <div className="flex items-center mr-8">
          <NavLink to="/connexion" className="mr-5" style={({ isActive }) => { return isActive ? { color: "#C6DFDF" } : {}; }}>Connexion</NavLink>
          <NavLink to="/inscription" isActive={(match, location) => location.pathname === "/inscription"}>
            {({ isActive }) => (
              <Button text='Inscription' className={isActive ? 'background-black' : 'background-grey'} />
            )}
          </NavLink>
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


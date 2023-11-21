import React from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

const Header = ({isConnected = false}) => {
  return (
    <div className="flex justify-between items-center my-3 inter-semi-bold">
      <div className="flex items-center text-grey">
        <Link to="/"><img src="./img/petit-logo.PNG" alt="Petit logo" className="mr-4 ml-4 w-21 h-16" /></Link>
        <Link to="/rejoindre" className="ml-20">Rejoindre</Link>
        <Link to="/prix" className="ml-20">Prix</Link>
        <Link to="/a-propos" className="ml-20">A propos</Link>
      </div>
      {!isConnected ? (
        <div className="flex items-center mr-8">
          <Link to="/connexion" className="mr-5">Connexion</Link>
          <Link to="/inscription"><Button text='Inscription'/></Link>
        </div>
      ) : (
        <img src="./img/petit-logo.PNG" alt="Petit logo" className="mr-4 ml-4 w-6 h-4" />
      )}
      
      
    </div>
  );
};

export default Header;


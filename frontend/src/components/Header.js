import React from "react";
import Button from "./Button";

const Header = ({isConnected = false}) => {
  return (
    <div className="flex justify-between items-center my-3">
      <div className="flex items-center text-grey">
        <img src="./img/petit-logo.PNG" alt="Petit logo" className="mr-4 ml-4 w-21 h-16" />
        <p className="ml-20">Rejoindre</p>
        <p className="ml-20">Prix</p>
        <p className="ml-20">A propos</p>
      </div>
      {!isConnected ? (
        <div className="flex items-center mr-8">
          <p className="mr-5">Connexion</p>
          <Button text='Inscription'/>
        </div>
      ) : (
        <img src="./img/petit-logo.PNG" alt="Petit logo" className="mr-4 ml-4 w-6 h-4" />
      )}
      
      
    </div>
  );
};

export default Header;


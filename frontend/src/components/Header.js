import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex justify-start">
      <img src="frontend\public\img\petit-logo.PNG" ></img>
      <p className="ml-4">Rejoindre</p>
      <p className="ml-4">Prix</p>
      <p className="ml-4">A propos</p>
      <div className="absolute right-0">
        <Button text='Inscription'/>
      </div>
    </div>
  );
};

export default Header;

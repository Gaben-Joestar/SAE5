import React from 'react';
import Header from '../components/Header';

const Connexion = () => {
    return (
        <div>
          <Header />
          <div className='flex items-center'>
            <img className="w-1/5" src='./img/grand-logo.PNG' alt="logo" />
            <input type="text" name="pseudo" id="pseudo" />
            <input className="bg-grey"type="text" name="pseudo" id="pseudo" />
          </div>
        </div>
    );
};

export default Connexion;
import React from 'react';


const Header = () => {
    return (
        <div>
            <ul className='flex flex-row'>
                <li><img src="./img/petit-logo.PNG" alt="logo" /></li>
                <li className='font-black'>Rejoindre</li>
                <li>Prix</li>
                <li>A propos</li>
            </ul>

            <ul className='flex flex-row'>
                <li>Connexion</li>
                <li>Inscription</li>
            </ul>
        </div>
    );
};

export default Header;
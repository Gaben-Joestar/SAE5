import React, { useState } from 'react';
import InscriptionEnTete from '../components/InscriptionEnTete';
import InscriptionPage1 from '../components/InscriptionPage1';
import InscriptionPage2 from '../components/InscriptionPage2';
import Header from '../components/Header';

const Inscription = () => {
    const [afficherPage2, setAfficherPage2] = useState(false);

    const buttonClicked = () => {
        setAfficherPage2(true);
    }

    return (
        <div className='flex flex-col'>
            <Header />
            <InscriptionEnTete />
            {!afficherPage2 && <InscriptionPage1 onButtonClick={buttonClicked} />}
            {afficherPage2 && <InscriptionPage2 />}
        </div>
    );
};

export default Inscription;
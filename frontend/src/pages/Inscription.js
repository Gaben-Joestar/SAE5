import React, { useState } from 'react';
import InscriptionEnTete from '../components/InscriptionEnTete';
import InscriptionPage1 from '../components/InscriptionPage1';
import InscriptionPage2 from '../components/InscriptionPage2';
import Header from '../components/Header';
import InscriptionPage3 from '../components/InscriptionPage3';
import InscriptionPage4 from '../components/InscriptionPage4';

const Inscription = () => {
    const [afficherPage1, setAfficherPage1] = useState(true);
    const [afficherPage2, setAfficherPage2] = useState(false);
    const [afficherPage3, setAfficherPage3] = useState(false);
    const [afficherPage4, setAfficherPage4] = useState(false);

    const [percentage, setPercentage] = useState(20);

    const buttonClicked1 = () => {
        setAfficherPage1(false);
        setAfficherPage2(true);
        setAfficherPage3(false);
        setAfficherPage4(false);
        setPercentage(50);
    }

    const buttonClicked2 = () => {
        setAfficherPage1(false);
        setAfficherPage2(false);
        setAfficherPage3(true);
        setAfficherPage4(false);
        setPercentage(80);
    }
    const buttonClicked3 = () => {
        setAfficherPage1(false);
        setAfficherPage2(false);
        setAfficherPage3(false);
        setAfficherPage4(true);
    }

    return (
        <div className='flex flex-col'>
            <Header />
            {!afficherPage4 && <InscriptionEnTete percentage={percentage} />}
            {afficherPage1 && <InscriptionPage1 onButtonClick={buttonClicked1} />}
            {afficherPage2 && <InscriptionPage2 onButtonClick={buttonClicked2} />}
            {afficherPage3 && <InscriptionPage3 onButtonClick={buttonClicked3} />}
            {afficherPage4 && <InscriptionPage4 />}
        </div>
    );
};

export default Inscription;
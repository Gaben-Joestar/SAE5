import React from 'react';
import InscriptionEnTete from '../components/InscriptionEnTete';
import InscriptionPage1 from '../components/InscriptionPage1';
import Header from '../components/Header';

const Inscription = () => {
    return (
        <div className='flex flex-col'>
            <Header />
            <InscriptionEnTete />
            <InscriptionPage1 />
        </div>
    );
};

export default Inscription;
import React from 'react';
import ProgressBar from './ProgressBar';

const InscriptionEnTete = ({ percentage }) => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='inter-extra-bold text-grey '>INSCRIPTION</h1>
            <h5 className='inter-medium font-normal text-grey mb-4'>Informations</h5>
            <ProgressBar percentage={percentage} />
        </div >

    );
};

export default InscriptionEnTete;
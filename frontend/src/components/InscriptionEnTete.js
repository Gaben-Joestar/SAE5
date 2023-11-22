import React from 'react';

const InscriptionEnTete = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='inter-extra-bold text-grey '>INSCRIPTION</h1>
            <h5 className='inter-medium font-normal text-grey'>Informations</h5>
            <div className="relative h-4 w-full bg-gray-300">
                <div className="absolute top-0 left-0 h-full w-full bg-gray-300"></div>
                <div className="absolute top-0 left-0 h-full bg-yellow-500" style={{ width: '30%' }}></div>
            </div>
        </div >

    );
};

export default InscriptionEnTete;
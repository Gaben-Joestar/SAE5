import React from 'react';

const InscriptionEnTete = () => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='inter-extra-bold text-grey '>INSCRIPTION</h1>
            <h5 className='inter-medium font-normal text-grey'>Informations</h5>
            <input type="range" name="progression" id="progression" disabled value={20} min={0} max={100} className='w-1/4 my-4 ' />
        </div>

    );
};

export default InscriptionEnTete;
import React from 'react';
import Button from './Button';

const InscriptionPage1 = () => {
    return (
        <div className='flex flex-col items-center mt-12'>
            <div className='flex flex-col'>
                <label htmlFor="email" className='inter-semi-bold'>Email</label>
                <input type="email" name="email" id="email" required className="rounded-2xl drop-shadow-md w-128 py-1 pl-3" />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="pseudo" className='inter-semi-bold'>Pseudo</label>
                <input type="text" name="pseudo" id="pseudo" required className="rounded-2xl drop-shadow-md w-128 py-1 pl-3" />
            </div>
            <div className='flex flex-col items-start'>
                <label htmlFor="dateNaissance" className='inter-semi-bold'>Date de Naissance</label>
                <input type="date" name="dateNaissance" id="dateNaissance" className="rounded-2xl drop-shadow-md w-20 py-1 pl-3" />
            </div>
            <Button text={'Suivant'} />
        </div>
    );
};

export default InscriptionPage1;
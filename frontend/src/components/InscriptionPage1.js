import React from 'react';

const InscriptionPage1 = ({ onButtonClick }) => {
    return (
        <div className='flex flex-col align-middle ml-auto mr-auto' >
            <div className='flex flex-col items-baseline mt-12  gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor="email" className='inter-medium'>Email</label>
                    <input type="email" name="email" id="email" required className="rounded-2xl drop-shadow-md w-128 py-1 pl-3" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="pseudo" className='inter-medium'>Pseudo</label>
                    <input type="text" name="pseudo" id="pseudo" required className="rounded-2xl drop-shadow-md w-128 py-1 pl-3" />
                </div>
                <div className='flex flex-col items-start'>
                    <label htmlFor="dateNaissance" className='inter-semi-bold'>Date de Naissance</label>
                    <input type="date" name="dateNaissance" id="dateNaissance" className="rounded-2xl drop-shadow-md w-25 py-1 pl-3" />
                </div>

            </div>
            <div className='flex flex-col justify-center align-middle mt-7'>
                <div className='grow-0 ml-auto '>
                    <button className="px-5 py-1.5 bg-grey rounded-3xl text-white" onClick={onButtonClick}>Suivant</button>
                </div>
            </div>

        </div>
    );
};

export default InscriptionPage1;
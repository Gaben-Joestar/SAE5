import React from 'react';

const InscriptionPage3 = ({ onButtonClick }) => {
    return (
        <div className='flex flex-col align-middle ml-auto mr-auto mt-8'>
            <div className='flex flex-row align-middle gap-32 '>
                <div className='flex flex-col gap-4'>
                    <img src="./img/left-arrow-dark.png" alt="Précédent" />
                    <img src="./img/left-arrow-dark.png" alt="Précédent" />
                </div>
                <div>
                    <img src="./img/avatar.png" alt="Avatar" />
                </div>
                <div className='flex flex-col gap-4'>
                    <img src="./img/right-arrow-dark.png" alt="Suivant" />
                    <img src="./img/right-arrow-dark.png" alt="Suivant" />
                </div>
            </div>
            <div className='flex flex-row justify-center align-middle mt-2'>
                <div className='grow-0 mr-auto'>
                    <img src="./img/left-arrow.png" alt="retour" className='h-12 w-12' />
                </div>
                <div className='grow-0 ml-auto mt-auto '>
                    <button className="px-5 py-1.5 bg-grey rounded-3xl text-white" onClick={onButtonClick}>Suivant</button>
                </div>
            </div>

        </div>
    );
};

export default InscriptionPage3;
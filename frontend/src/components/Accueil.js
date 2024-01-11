import React from 'react';
import Button from './Button';

const Accueil = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <img src='./img/grand-logo.PNG' alt="logo" className='w-2-7' />
            <div className='text-center inter-semi-bold text-light-grey'>
                <p>Le jeu de quizz en ligne qui rend l'apprentissage amusant pour tous.</p>
                <p>Rejoins-nous et défie tes connaissances ! 🌟📚🤓</p>
            </div>
            <div className='mt-6'>
                <Button text={'Jouer'} />
            </div>
        </div>
    );
};

export default Accueil;
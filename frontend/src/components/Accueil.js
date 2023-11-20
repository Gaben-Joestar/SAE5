import React from 'react';

const Accueil = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <img src='./img/grand-logo.PNG' alt="logo" className='w-3/4' />
            <div className='text-center inter-extra-bold'>
                <p>Le jeu de quizz en ligne qui rend l'apprentissage amusant pour tous.</p>
                <p>Rejoins-nous et défie tes connaissances ! 🌟📚🤓</p>
            </div>
            <p className='w-3/4 text-center inter-extra-bold'>
            </p>
            <input type="button" value="Jouer" />
        </div>
    );
};

export default Accueil;
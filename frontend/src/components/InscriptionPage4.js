import React from 'react';

const InscriptionPage4 = () => {
    return (
        <div className='flex flex-col mt-24'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-col items-center text-center justify-center'>
                        <h2 className='inter-extra-bold text-light-blue'>Choisissez votre plan</h2>
                        <p className='inter-medium max-w-xs'>Afin de finaliser votre compte, quel type d'abonnement vous convient le mieux ?</p>
                    </div>
                    <div className='bg-white-grey rounded-perso shadow-md '>
                        <button className="px-5 py-1.5 bg-light-grey rounded-3xl text-white mt-5 ml-5">Basic</button>
                        <div className='flex flex-row-reverse '>
                            <img src="./img/loupe-offre-gratuite.png" alt="Offre Gratuite" className='w-1/4 h-full ml-auto mr-auto  imageLoupe' />
                            <h2 className='inter-extra-bold text-grey ml-5'>GRATUIT</h2>

                        </div>
                        <ul className=' mt-2 ml-5 flex flex-col gap-1 mb-10 mr-2'>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/coche-vert.png" alt="-" />
                                <p className='inter-medium'>Mode joueur seul</p>
                            </li>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/coche-vert.png" alt="-" />
                                <p className='inter-medium'>Mode partie 1 à 4 joueurs</p>
                            </li>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/coche-vert.png" alt="-" />
                                <p className='inter-medium'>Création de quizz</p>
                            </li>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/croix-rouge.png" alt="-" />
                                <p className='inter-medium line-through text-grey'>Mode partie plus de 4 joueurs</p>
                            </li>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/croix-rouge.png" alt="-" />
                                <p className='inter-medium line-through text-grey'>Customisation avatar</p>
                            </li>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/croix-rouge.png" alt="-" />
                                <p className='inter-medium line-through text-grey'>Avant-première nouveautés</p>
                            </li>
                        </ul>
                        <div className='flex flex-col align-middle mb-10'>
                            <a href="/" className='underline inter-medium ml-auto mr-auto text-grey'>Continuer</a>
                        </div>
                    </div>

                    <div className='bg-FCFDF2 rounded-perso shadow-md '>
                        <button className="px-5 py-1.5 bg-yellow rounded-3xl text-white mt-5 ml-5">Gold</button>
                        <div className='flex flex-row-reverse '>
                            <img src="./img/loupe-offre-gold.png" alt="Offre Gratuite" className='w-1/4 h-full ml-auto mr-auto  imageLoupe' />
                            <h2 className='inter-extra-bold text-grey ml-5'>4.99€ /mois</h2>

                        </div>
                        <ul className=' mt-2 ml-5 flex flex-col gap-1 mb-10 mr-2'>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/coche-vert.png" alt="-" />
                                <p className='inter-medium'>Mode joueur seul</p>
                            </li>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/coche-vert.png" alt="-" />
                                <p className='inter-medium'>Mode partie 1 à 4 joueurs</p>
                            </li>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/coche-vert.png" alt="-" />
                                <p className='inter-medium'>Création de quizz</p>
                            </li>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/coche-vert.png" alt="-" />
                                <p className='inter-medium '>Mode partie plus de 4 joueurs</p>
                            </li>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/coche-vert.png" alt="-" />
                                <p className='inter-medium '>Customisation avatar</p>
                            </li>
                            <li className='flex flex-row gap-4'>
                                <img src="./img/coche-vert.png" alt="-" />
                                <p className='inter-medium '>Avant-première nouveautés</p>
                            </li>
                        </ul>
                        <div className='flex flex-col align-middle mb-10'>
                            <button className="px-5 py-1.5 bg-yellow rounded-3xl text-white  ml-5 mr-5">Choisir</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InscriptionPage4;
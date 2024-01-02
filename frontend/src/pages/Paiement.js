import React from 'react';
import Header from '../components/Header';

const Paiement = () => {
    return (
        <div>
            <Header />
            <div className='flex flex-col align-middle justify-center ml-auto mr-auto '>
                <form action="" className='flex flex-col align-middle justify-center gap-14 ml-auto mr-auto'>

                    <div className='ml-auto mr-auto inter-extra-bold '>
                        <img src="./img/grand-logo.PNG" alt="logo" className="w-3/4 ml-auto mr-auto" />
                    </div>

                    <div className='flex flex-row align-middle justify-center gap-24'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='ml-auto mr-auto inter-semi-bold mb-3'>Informations Personnelles</h3>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="nom" className='inter-medium pl-3'>Nom :</label>
                                <input type="text" name="nom" id="nom" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="prenom" className='inter-medium pl-3'>Prénom :</label>
                                <input type="text" name="prenom" id="prenom" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="email" className='inter-medium pl-3'>Adresse Mail :</label>
                                <input type="email" name="email" id="email" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="numeroTelephone" className='inter-medium pl-3'>Numéro de Téléphone :</label>
                                <input type="tel" name="numeroTelephone" id="numeroTelephone" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <h3 className='ml-auto mr-auto inter-semi-bold mb-3' >Adresse de facturation</h3>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="adresse" className='inter-medium pl-3'>Adresse :</label>
                                <input type="text" name="adresse" id="adresse" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="ville" className='inter-medium pl-3'>Ville :</label>
                                <input type="text" name="Ville" id="Ville" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="codePostal" className='inter-medium pl-3'>Code Postal :</label>
                                <input type="number" name="codePostal" id="codePostal" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="codePostal" className='inter-medium pl-3'>Pays :</label>
                                <input type="text" name="pays" id="pays" className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                            </div>
                        </div>
                    </div>


                    <div className='ml-auto mr-auto '>
                        <button type='submit' className='px-5 py-1.5 bg-grey rounded-3xl text-white'>Passer au paiement</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Paiement;
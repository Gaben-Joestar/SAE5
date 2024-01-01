import React from 'react';
import Header from '../components/Header';

const AjoutQuestion = () => {
    return (
        <div>
            <Header />


            <div className='flex flex-col align-middle justify-center ml-auto mr-auto '>
                <form action="/" className='flex flex-col align-middle justify-center gap-14 ml-auto mr-auto'>
                    <h1 className='inter-extra-bold ml-auto mr-auto'>PROPOSITION</h1>

                    <div className='flex flex-row gap-5'>
                        <div className='flex flex-row gap-2'>
                            <label htmlFor="question" className='mt-auto mb-auto'>Question :</label>
                            <input type="text" name="question" id="question" required className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3" />
                        </div>
                        <div className='flex flex-row gap-2'>
                            <label htmlFor="theme" className='mt-auto mb-auto'>Thème :</label>
                            <select name="theme" required id="theme">
                                <option value="" disabled selected className='hidden'>Choisir un thème</option>
                                <option value="element1">element1</option>
                                <option value="element2">element2</option>
                                <option value="element3">element3</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-row gap-8'>
                            <div className='flex flex-col'>
                                <label htmlFor="bonneReponse" className='pl-3'>Bonne réponse :</label>
                                <input type="text" name="bonneReponse" id="bonneReponse" required className="rounded-2xl drop-shadow-lg w-96 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="reponse2" className='pl-3'>Réponse 2 :</label>
                                <input type="text" name="reponse2" id="reponse2" required className="rounded-2xl drop-shadow-lg w-96 py-1 pl-3" />
                            </div>
                        </div>
                        <div className='flex flex-row gap-8'>
                            <div className='flex flex-col'>
                                <label htmlFor="reponse3" className='pl-3'>Réponse 3 :</label>
                                <input type="text" name="reponse3" id="reponse3" required className="rounded-2xl drop-shadow-lg w-96 py-1 pl-3" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="reponse4" className='pl-3'>Réponse 4 :</label>
                                <input type="text" name="reponse4" id="reponse4" required className="rounded-2xl drop-shadow-lg w-96 py-1 pl-3" />
                            </div>
                        </div>

                    </div>
                    <div className='ml-auto mr-auto mt-4'>
                        <input type="submit" value="Valider" className='px-5 py-1.5 bg-grey rounded-3xl text-white w-48' />
                    </div>

                </form>

            </div>

        </div>
    );
};

export default AjoutQuestion;
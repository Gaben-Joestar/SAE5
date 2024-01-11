import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const AjoutQuestion = () => {
    const [themes, setThemes] = useState([]);
    const [formData, setFormData] = useState({
        question: '',
        theme: '',
        bonneReponse: '',
        reponse2: '',
        reponse3: '',
        reponse4: '',
    });

    useEffect(() => {
        fetch('http://localhost:3000/theme/recuperer')
            .then(response => response.json())
            .then(data => {
                setThemes(data.themes);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des thèmes :', error);
            });
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/question/creer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Question créée avec succès');
                window.location.href = '/';
            } else {
                console.error('Erreur lors de la création de la question.');
            }
        } catch (error) {
            console.error('Erreur lors de la création de la question:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <Header />

            <div className='flex flex-col align-middle justify-center ml-auto mr-auto '>
                <form onSubmit={handleFormSubmit} className='flex flex-col align-middle justify-center gap-14 ml-auto mr-auto'>
                    <h1 className='inter-extra-bold ml-auto mr-auto'>PROPOSITION</h1>

                    <div className='flex flex-row gap-5'>
                        <div className='flex flex-row gap-2'>
                            <label htmlFor="question" className='mt-auto mb-auto'>Question :</label>
                            <input
                                type="text"
                                name="question"
                                id="question"
                                required
                                className="rounded-2xl drop-shadow-lg w-128 py-1 pl-3 border-grey border-2 hover:bg-white-grey ease-in-out duration-200"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='flex flex-row gap-2'>
                            <label htmlFor="theme" className='mt-auto mb-auto '>Thème :</label>
                            <select
                                name="theme"
                                required
                                id="theme"
                                onChange={handleInputChange}
                                value={formData.theme}
                            >
                                <option value="" disabled hidden className='hidden'>Choisir un thème</option>
                                {themes.map((theme) => (
                                    <option key={theme._id} value={theme.nom}>{theme.nom}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-row gap-8'>
                            <div className='flex flex-col'>
                                <label htmlFor="bonneReponse" className='pl-3'>Bonne réponse :</label>
                                <input
                                    type="text"
                                    name="bonneReponse"
                                    id="bonneReponse"
                                    required
                                    className="rounded-2xl drop-shadow-lg w-96 py-1 pl-3 border-green border-2 hover:bg-white-grey ease-in-out duration-200"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="reponse2" className='pl-3'>Réponse 2 :</label>
                                <input
                                    type="text"
                                    name="reponse2"
                                    id="reponse2"
                                    required
                                    className="rounded-2xl drop-shadow-lg w-96 py-1 pl-3 border-red border-2 hover:bg-white-grey ease-in-out duration-200"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className='flex flex-row gap-8'>
                            <div className='flex flex-col'>
                                <label htmlFor="reponse3" className='pl-3'>Réponse 3 :</label>
                                <input
                                    type="text"
                                    name="reponse3"
                                    id="reponse3"
                                    required
                                    className="rounded-2xl drop-shadow-lg w-96 py-1 pl-3 border-red border-2 hover:bg-white-grey ease-in-out duration-200"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="reponse4" className='pl-3'>Réponse 4 :</label>
                                <input
                                    type="text"
                                    name="reponse4"
                                    id="reponse4"
                                    required
                                    className="rounded-2xl drop-shadow-lg w-96 py-1 pl-3 border-red border-2 hover:bg-white-grey ease-in-out duration-200"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='ml-auto mr-auto mt-4'>
                        <input type="submit" value="Valider" className='px-5 py-1.5 bg-grey rounded-3xl text-white w-48 hover:w-64 hover:h-12 hover:bg-black ease-in-out duration-200' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AjoutQuestion;

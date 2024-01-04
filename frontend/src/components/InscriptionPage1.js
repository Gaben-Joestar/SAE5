import React, { useState } from 'react';

const InscriptionPage1 = ({ onButtonClick, onEmailRecup, onPseudoRecup, onDateNaissanceRecup }) => {
    const [email, setEmail] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');

    const [emailError, setEmailError] = useState('');
    const [pseudoError, setPseudoError] = useState('');
    const [dateNaissanceError, setDateNaissanceError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        onEmailRecup(e.target.value);
    }

    const handleEmailBlur = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setEmailError('Adresse email invalide');
        } else {
            verifierExistenceCompte(email);
        }
    }

    const verifierExistenceCompte = async (email) => {
        try {
            const response = await fetch(`http://localhost:3000/user/recuperer/${encodeURIComponent(email)}`);

            if (response.ok) {
                setEmailError('Il existe déjà un compte utilisant cette adresse mail');
            } else {
                setEmailError('');
            }
        } catch (error) {
            setEmailError("Erreur lors de la vérification de l'adresse mail. Veuillez réessayer plus tard.");
        }
    };


    const handlePseudoChange = (e) => {
        setPseudo(e.target.value);
        onPseudoRecup(e.target.value);
    }

    const handlePseudoBlur = () => {
        if (pseudo.length < 3) {
            setPseudoError('Le pseudo doit contenir au moins 3 caractères');
        } else {
            setPseudoError('');
        }
    }

    const handleDateNaissanceChange = (e) => {
        setDateNaissance(e.target.value);
        onDateNaissanceRecup(e.target.value);
    }

    const handleDateNaissanceBlur = () => {
        if (!dateNaissance) {
            setDateNaissanceError('Veuillez entrer une date de naissance');
        } else {
            setDateNaissanceError('');
        }
    }

    const isNextButtonDisabled = emailError || pseudoError || dateNaissanceError || !email || !pseudo || !dateNaissance;


    return (
        <div className='flex flex-col align-middle ml-auto mr-auto'>
            <div className='flex flex-col items-baseline mt-12 gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor="email" className='inter-medium'>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                        className="rounded-2xl drop-shadow-md w-128 py-1 pl-3"
                    />
                    {emailError && <p className=" text-red pl-3">{emailError}</p>}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="pseudo" className='inter-medium'>Pseudo</label>
                    <input
                        type="text"
                        name="pseudo"
                        id="pseudo"
                        required
                        value={pseudo}
                        onChange={handlePseudoChange}
                        onBlur={handlePseudoBlur}
                        className="rounded-2xl drop-shadow-md w-128 py-1 pl-3"
                    />
                    {pseudoError && <p className="text-red pl-3">{pseudoError}</p>}
                </div>
                <div className='flex flex-col items-start'>
                    <label htmlFor="dateNaissance" className='inter-semi-bold'>Date de Naissance</label>
                    <input
                        type="date"
                        name="dateNaissance"
                        id="dateNaissance"
                        required
                        value={dateNaissance}
                        onChange={handleDateNaissanceChange}
                        onBlur={handleDateNaissanceBlur}
                        className="rounded-2xl drop-shadow-md w-25 py-1 pl-3"
                    />
                    {dateNaissanceError && <p className="text-red pl-3">{dateNaissanceError}</p>}
                </div>
            </div>
            <div className='flex flex-col justify-center align-middle mt-7'>
                <div className='grow-0 ml-auto '>
                    <button className="px-5 py-1.5 bg-grey rounded-3xl text-white" onClick={onButtonClick} disabled={isNextButtonDisabled}>Suivant</button>
                </div>
            </div>
        </div>
    );
};

export default InscriptionPage1;

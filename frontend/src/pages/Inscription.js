import React, { useState } from 'react';
import InscriptionEnTete from '../components/InscriptionEnTete';
import InscriptionPage1 from '../components/InscriptionPage1';
import InscriptionPage2 from '../components/InscriptionPage2';
import Header from '../components/Header';
import InscriptionPage3 from '../components/InscriptionPage3';
import InscriptionPage4 from '../components/InscriptionPage4';

const Inscription = () => {
    const [afficherPage1, setAfficherPage1] = useState(true);
    const [afficherPage2, setAfficherPage2] = useState(false);
    const [afficherPage3, setAfficherPage3] = useState(false);
    const [afficherPage4, setAfficherPage4] = useState(false);

    const [email, setEmail] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [password, setPassword] = useState('');

    // Pourcentage de remplissage de la barre de chargement du header
    const [percentage, setPercentage] = useState(20);

    const buttonClicked1 = () => {
        setAfficherPage1(true);
        setAfficherPage2(false);
        setAfficherPage3(false);
        setAfficherPage4(false);
        setPercentage(20);
    }


    const buttonClicked2 = () => {
        setAfficherPage1(false);
        setAfficherPage2(true);
        setAfficherPage3(false);
        setAfficherPage4(false);
        setPercentage(50);
    }

    const buttonClicked3 = () => {
        setAfficherPage1(false);
        setAfficherPage2(false);
        setAfficherPage3(true);
        setAfficherPage4(false);
        setPercentage(80);
    }
    const buttonClicked4 = () => {
        setAfficherPage1(false);
        setAfficherPage2(false);
        setAfficherPage3(false);
        setAfficherPage4(true);
        handleCreateUser();
    }

    const handleEmailRecup = (newEmail) => {
        setEmail(newEmail);
    };

    const handlePseudoRecup = (newPseudo) => {
        setPseudo(newPseudo);
    };

    const handleDateNaissanceRecup = (newDateNaissance) => {
        setDateNaissance(newDateNaissance);
    };

    const handlePasswordRecup = (newPassword) => {
        setPassword(newPassword);
    };

    const handleCreateUser = async () => {
        try {
            const response = await fetch('http://localhost:3000/user/creer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify({
                    email: email,
                    pseudo: pseudo,
                    date_naissance: dateNaissance,
                    mdp: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Utilisateur créé avec succès :', data);
                // Mettez à jour l'interface utilisateur ou effectuez d'autres actions nécessaires.
            } else {
                const errorData = await response.json();
                console.error('Erreur lors de la création de l\'utilisateur :', errorData);
                // Gérez l'erreur, par exemple, affichez un message d'erreur à l'utilisateur.
            }
        } catch (error) {
            console.error('Erreur lors de la requête :', error);
            // Gérez les erreurs lors de l'envoi de la requête.
        }
    }

    return (
        <div className='flex flex-col'>
            <Header />
            {!afficherPage4 && <InscriptionEnTete percentage={percentage} />}
            {afficherPage1 && <InscriptionPage1
                onButtonClick={buttonClicked2}
                onEmailRecup={handleEmailRecup}
                onPseudoRecup={handlePseudoRecup}
                onDateNaissanceRecup={handleDateNaissanceRecup} />}
            {afficherPage2 && <InscriptionPage2
                onButtonClick={buttonClicked3}
                onReturnClick={buttonClicked1}
                onPasswordRecup={handlePasswordRecup} />}
            {afficherPage3 && <InscriptionPage3 onButtonClick={buttonClicked4} onReturnClick={buttonClicked2} />}
            {afficherPage4 && <InscriptionPage4 />}
        </div>
    );
};

export default Inscription;
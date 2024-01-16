import React, { useState } from 'react';
import Cookies from 'js-cookie';

const BacklogLogin = () => {
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Simule une requête d'authentification (remplacez par votre logique d'authentification réelle)
        if (pseudo === 'admin' && password === '1234') {
            // Authentification réussie, définissez un cookie (par exemple, authToken)
            Cookies.set('authToken', 'votreToken');
            window.location.href = '/backlog';
        } else {
            // Authentification échouée, ajoutez ici la logique pour afficher un message d'erreur
            alert('Authentification échouée. Veuillez vérifier vos informations.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-evenly mx-auto gap-20 mt-16 ">
            <img src="./img/grand-logo.PNG" alt="Logo" />
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pseudo">
                        Pseudo
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="pseudo"
                        type="text"
                        placeholder="Pseudo"
                        value={pseudo}
                        onChange={(e) => setPseudo(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray text-sm font-bold mb-2" htmlFor="password">
                        Mot de passe
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-grey hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ease-in-out duration-200"
                        type="button"
                        onClick={handleLogin}
                    >
                        Se connecter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BacklogLogin;
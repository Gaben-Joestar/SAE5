import React, { useState, useEffect } from 'react';

const BacklogThemes = () => {
    const [themes, setThemes] = useState([]);
    const [nouveauTheme, setNouveauTheme] = useState('');

    useEffect(() => {
        fetchThemes();
    }, []);

    const fetchThemes = async () => {
        try {
            const response = await fetch('http://localhost:3000/theme/recuperer');
            if (response.ok) {
                const data = await response.json();
                setThemes(data.themes);
            } else {
                console.error('Erreur lors de la récupération des thèmes');
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
    };

    const handleSupprimer = async (nom) => {
        try {
            const response = await fetch(`http://localhost:3000/theme/supprimer/${nom}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
            });

            if (response.ok) {
                console.log(`Thème ${nom} supprimé `);
                fetchThemes(); // Met à jour la liste des thèmes après la suppression
            } else {
                const errorData = await response.json();
                console.error('Erreur lors de la suppression du thème:', errorData);
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
    };

    const handleAjouterTheme = async () => {
        try {
            const response = await fetch('http://localhost:3000/theme/creer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify({
                    nom: nouveauTheme,
                }),
            });

            if (response.ok) {
                console.log('Thème ajouté avec succès');
                fetchThemes(); // Met à jour la liste des thèmes après l'ajout
                setNouveauTheme(''); // Réinitialise le champ de saisie
            } else {
                const errorData = await response.json();
                console.error('Erreur lors de la création du thème :', errorData);
            }
        } catch (error) {
            console.error('Erreur lors de la requête :', error);
        }
    };

    return (
        <div className="flex flex-row justify-center text-center mt-16 gap-24">
            <div className="border-collapse bg-white rounded-md overflow-hidden">
                <table className="table-auto ml-auto mr-auto">
                    <thead>
                        <tr className="bg-sepia">
                            <th className="p-2 border w-52 text-white">Nom</th>
                            <th className="p-2 border text-white">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {themes.map((theme) => (
                            <tr key={theme.id} className="border-b">
                                <td className="p-2 border">{theme.nom}</td>
                                <td className="p-2 border">
                                    <button
                                        className="bg-red text-white p-2 rounded-md"
                                        onClick={() => handleSupprimer(theme.nom)}
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="ml-4">
                <h2 className="text-xl font-bold mb-2">Ajouter un thème</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleAjouterTheme(); }}>
                    <input
                        type="text"
                        value={nouveauTheme}
                        onChange={(e) => setNouveauTheme(e.target.value)}
                        className="p-2 border rounded-md"
                        placeholder="Nom du thème"
                    />
                    <button type="submit" className="bg-green text-white p-2 rounded-md ml-2">
                        Ajouter
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BacklogThemes;

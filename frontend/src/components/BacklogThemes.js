import React, { useState } from 'react';

const BacklogThemes = () => {
    const [nouveauTheme, setNouveauTheme] = useState('');
    const [themes, setThemes] = useState([
        { id: 1, nom: 'Theme 1' },
    ]);

    const handleSupprimer = (id) => {
        // Logique pour supprimer un thème
        console.log(`Thème supprimé avec l'ID ${id}`);
    };

    const handleAjouterTheme = () => {
        // Logique pour ajouter un thème
        const nouvelId = themes.length + 1;
        const nouveauThemeObj = { id: nouvelId, nom: nouveauTheme };
        setThemes([...themes, nouveauThemeObj]);
        setNouveauTheme('');
    };

    return (
        <div className="flex flex-row justify-center text-center mt-16 gap-24">
            <div className="border-collapse bg-white rounded-md overflow-hidden">
                <table className="table-auto ml-auto mr-auto ">
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
                                        onClick={() => handleSupprimer(theme.id)}
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

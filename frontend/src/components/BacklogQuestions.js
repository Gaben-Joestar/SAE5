import React from 'react';

const BacklogQuestions = () => {
    const questions = [
        {
            theme: 'Theme 1',
            question: 'Quelle est la question ?',
            bonneRep: 'Bonne réponse',
            rep2: 'Réponse 2',
            rep3: 'Réponse 3',
            rep4: 'Réponse 4',
            id: 1, // Un identifiant unique pour chaque question
        },
        // ... Ajoutez d'autres questions ici
    ];

    const handleValider = (id) => {
        // Logique pour valider une question
        console.log(`Question validée avec l'ID ${id}`);
    };

    const handleRefuser = (id) => {
        // Logique pour refuser une question
        console.log(`Question refusée avec l'ID ${id}`);
    };

    return (
        <div className="w-full border-collapse bg-white rounded-md overflow-hidden">
            <table className="table-auto ml-auto mr-auto mt-16">
                <thead>
                    <tr className=" bg-sepia">
                        <th className="p-2 border text-white">Thème</th>
                        <th className="p-2 border text-white">Question</th>
                        <th className="p-2 border text-white">Bonne réponse</th>
                        <th className="p-2 border text-white">Réponse 2</th>
                        <th className="p-2 border text-white">Réponse 3</th>
                        <th className="p-2 border text-white">Réponse 4</th>
                        <th className="p-2 border text-white">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question) => (
                        <tr key={question.id} className="border-b">
                            <td className="p-2 border">{question.theme}</td>
                            <td className="p-2 border">{question.question}</td>
                            <td className="p-2 border">{question.bonneRep}</td>
                            <td className="p-2 border">{question.rep2}</td>
                            <td className="p-2 border">{question.rep3}</td>
                            <td className="p-2 border">{question.rep4}</td>
                            <td className="p-2 border">
                                <button
                                    className="bg-green text-white p-2 rounded-md mr-2"
                                    onClick={() => handleValider(question.id)}
                                >
                                    Valider
                                </button>
                                <button
                                    className="bg-red text-white p-2 rounded-md"
                                    onClick={() => handleRefuser(question.id)}
                                >
                                    Refuser
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BacklogQuestions;
import React, { useState, useEffect } from 'react';

const BacklogQuestions = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const response = await fetch('http://localhost:3000/question/recuperer');
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setQuestions(data.questions);
            } else {
                console.error('Erreur lors de la récupération des questions');
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
    };

    const handleValider = async (question) => {
        try {
            const response = await fetch(`http://localhost:3000/question/valider/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify({
                    theme: question.theme,
                    question: question.question,
                    bonneRep: question.bonneRep,
                    rep2: question.rep2,
                    rep3: question.rep3,
                    rep4: question.rep4,
                }),
            });

            if (response.ok) {
                console.log(`Question validée `);
                handleRefuser(question._id);
                fetchQuestions();
            } else {
                console.error(`Erreur lors de la validation de la question `);
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
    };

    const handleRefuser = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/question/supprimer/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                console.log(`Question refusée avec l'ID ${id}`);
                // Actualiser la liste des questions après la suppression
                fetchQuestions();
            } else {
                console.error(`Erreur lors de la suppression de la question avec l'ID ${id}`);
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
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
                                    onClick={() => handleValider(question)}
                                >
                                    Valider
                                </button>
                                <button
                                    className="bg-red text-white p-2 rounded-md"
                                    onClick={() => handleRefuser(question._id)}
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



// Créer une question dans la base 
const creerQuestion = async (req, res) => {
    const { theme, question, bonneRep, rep2, rep3, rep4 } = req.body;
    const collection = req.db.collection('pendingQuestions');

    try {
        // Création de la question dans la base
        const insert = await collection.insertOne({
            theme,
            question,
            bonneRep,
            rep2,
            rep3,
            rep4
        });
        res.status(200).json({ success: true, message: 'Question ajoutée avec succès' });
    } catch (error) {
        console.error('Erreur lors de la création de la question : ', error);
        res.status(500).json({ success: false, message: 'Une erreur est survenue lors de la création de la question.' });
    }
};

module.exports = {
    creerQuestion,
};
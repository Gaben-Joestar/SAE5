const { ObjectId } = require('mongodb');

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

// Valider une question
const validerQuestion = async (req, res) => {
    const { theme, question, bonneRep, rep2, rep3, rep4 } = req.body;
    const collection = req.db.collection('questions');

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



const recupererQuestions = async (req, res) => {
    const collection = req.db.collection('pendingQuestions');

    try {
        const questions = await collection.find().toArray();

        res.status(200).json({ success: true, questions });
    } catch (error) {
        console.error('Erreur lors de la récupération des questions : ', error);
        res.status(500).json({ success: false, message: 'Une erreur est survenue lors de la récupération des questions.' });
    }
};

// Supprimer une question de la base
const supprimerQuestion = async (req, res) => {
    const { _id } = req.params;
    const objID = new ObjectId(_id)


    const collection = req.db.collection('pendingQuestions');

    try {
        // Suppression de la question de la base en utilisant son identifiant
        const result = await collection.deleteOne({ _id: objID });

        if (result.deletedCount > 0) {
            res.status(200).json({ success: true, message: 'Question supprimée avec succès' });
        } else {
            res.status(404).json({ success: false, message: 'Question non trouvée' });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression de la question : ', error);
        res.status(500).json({ success: false, message: 'Une erreur est survenue lors de la suppression de la question.' });
    }
};


module.exports = {
    creerQuestion,
    recupererQuestions,
    supprimerQuestion,
    validerQuestion,
};
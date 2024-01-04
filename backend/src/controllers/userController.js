const bcrypt = require('bcryptjs');

const creerUtilisateur = async (req, res) => {
    const { email, pseudo, date_naissance, mdp } = req.body;
    const collection = req.db.collection('utilisateurs');

    try {
        const insert = await collection.insertOne({
            mail: email,
            pseudo: pseudo,
            date_n: date_naissance,
            mdp: bcrypt.hash(mdp, 8)
        });

        res.status(200).json({ success: true, message: 'Utilisateur créé avec succès.' });
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        res.status(500).json({ success: false, message: 'Une erreur est survenue lors de la création de l\'utilisateur.' });
    }
};

const recupererUtilisateur = async (req, res) => {
    const userId = req.params.id;
    const collection = req.db.collection('utilisateurs');

    try {
        const utilisateur = await collection.findOne({ _id: userId });

        if (utilisateur) {
            res.status(200).json({ success: true, utilisateur });
        } else {
            res.status(404).json({ success: false, message: 'Utilisateur non trouvé.' });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur :', error);
        res.status(500).json({ success: false, message: 'Une erreur est survenue lors de la récupération de l\'utilisateur.' });
    }
};

module.exports = {
    creerUtilisateur,
    recupererUtilisateur,
};



// Créer un thème dans la base 
const creerTheme = async (req, res) => {
    const { nom } = req.body;
    const collection = req.db.collection('themes');

    try {
        // Création du thème dans la base
        const insert = await collection.insertOne({
            nom
        });
        res.status(200).json({ success: true, message: 'Thème ajouté avec succès' });
    } catch (error) {
        console.error('Erreur lors de la création du thème. ', error);
        res.status(500).json({ success: false, message: 'Une erreur est survenue lors de la création du thème' });
    }
};

const recupererThemes = async (req, res) => {
    try {
        const collection = req.db.collection('themes');
        const themes = await collection.find().toArray();

        // Envoyez la liste des thèmes en tant que réponse JSON
        res.json({ success: true, themes });
    } catch (error) {
        console.error('Erreur lors de la récupération des thèmes :', error);
        res.status(500).json({ success: false, message: 'Une erreur est survenue lors de la récupération des thèmes.' });
    }
};

module.exports = {
    creerTheme,
    recupererThemes,
};
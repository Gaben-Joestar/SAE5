

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

// Récupérer la liste des thèmes
const recupererThemes = async (req, res) => {
    try {
        const collection = req.db.collection('themes');
        const themes = await collection.find().toArray();

        res.json({ success: true, themes });
    } catch (error) {
        console.error('Erreur lors de la récupération des thèmes :', error);
        res.status(500).json({ success: false, message: 'Une erreur est survenue lors de la récupération des thèmes.' });
    }
};

// Suppression d'un thème dans la base
const supprimerThemes = async (req, res) => {
    try {
        const collection = req.db.collection('themes');

        const themeNom = req.params.nom;
        if (!themeNom) {
            return res.status(400).json({ success: false, message: "Le nom du thème est requis pour la suppression." });
        }


        const result = await collection.deleteOne({ nom: themeNom });

        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, message: "Thème non trouvé." });
        }


        const updatedThemes = await collection.find().toArray();

        res.json({ success: true, themes: updatedThemes });
    } catch (error) {
        console.error('Erreur lors de la suppression du thème :', error);
        res.status(500).json({ success: false, message: 'Une erreur est survenue lors de la suppression du thème.' });
    }
};


module.exports = {
    creerTheme,
    recupererThemes,
    supprimerThemes,
};
const { MongoClient } = require('mongodb');

const dbConnectionMiddleware = async (req, res, next) => {
    const client = new MongoClient('mongodb://bdd_user:Pm75319aW99%26*@10.1.138.47:27017/?authMechanism=DEFAULT');
    try {
        await client.connect();
        req.db = client.db('quizz');
        next();
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
        res.status(500).json({ error: 'Erreur de connexion à la base de données.' });
    } finally {
        await client.close();
    }
};

module.exports = dbConnectionMiddleware;

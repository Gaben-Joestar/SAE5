const { MongoClient } = require('mongodb');

let dbClient;

const dbConnectionMiddleware = async (req, res, next) => {
    try {
        if (!dbClient) {
            dbClient = new MongoClient('mongodb://127.0.0.1:27017');
            await dbClient.connect();
        }

        req.db = dbClient.db('quizz');
        next();
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
        res.status(500).json({ error: 'Erreur de connexion à la base de données.' });
    }
};

module.exports = dbConnectionMiddleware;

const express = require('express');
const app = express();
const quizzRoutes = require('./routes/quizzRoutes');
const userRoutes = require('./routes/userRoutes');
const dbConnectionMiddleware = require('./middlewares/dbConnectionMiddleware');

app.use(express.json());
app.use(dbConnectionMiddleware);

app.use('/quizz', quizzRoutes);
app.use('/user', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

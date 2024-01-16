const express = require('express');
const cors = require('cors');
const app = express();
const quizzRoutes = require('./routes/quizzRoutes');
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');
const themeRoutes = require('./routes/themeRoutes');
const dbConnectionMiddleware = require('./middlewares/dbConnectionMiddleware');

app.use(express.json());
app.use(dbConnectionMiddleware);
app.use(cors());

const corsOptions = {
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use('/quizz', quizzRoutes);
app.use('/user', userRoutes);
app.use('/question', questionRoutes);
app.use('/theme', themeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

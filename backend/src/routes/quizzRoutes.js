const express = require('express');
const router = express.Router();
const quizzController = require('../controllers/quizzController');

router.post('/creer', quizzController.creerQuizz);
router.get('/recuperer/:id', quizzController.recupererQuizz);

module.exports = router;

const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post('/creer', questionController.creerQuestion);
//router.get('/recuperer/:question', questionController.recupererQuestion);

module.exports = router;

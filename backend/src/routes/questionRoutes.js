const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.post('/creer', questionController.creerQuestion);
router.post('/valider', questionController.validerQuestion);
router.get('/recuperer/', questionController.recupererQuestions);
router.delete('/supprimer/:_id', questionController.supprimerQuestion);

module.exports = router;

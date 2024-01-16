const express = require('express');
const router = express.Router();
const partieController = require('../controllers/partieController');
const participantController = require('../controllers/participantController');

router.post('/creer', partieController.creerPartie);
router.post('/rejoindre', partieController.rejoindrePartie);
router.get('/participants/:code_partie', partieController.infoParticipants);

//router.get('/recuperer/:email', userController.recupererUtilisateur);
//router.get('/connexion/:email/:mdp', userController.connexionUtilisateur);

module.exports = router;

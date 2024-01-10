const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/creer', userController.creerUtilisateur);
router.get('/recuperer/:email', userController.recupererUtilisateur);
router.get('/connexion/:email/:mdp', userController.connexionUtilisateur);

module.exports = router;

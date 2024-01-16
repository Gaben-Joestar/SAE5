const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/creer', userController.creerUtilisateur);
router.get('/recuperer/:email', userController.recupererUtilisateur);
router.post('/connexion', userController.connexionUtilisateur);

module.exports = router;

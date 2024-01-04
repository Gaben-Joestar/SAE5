const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/creer', userController.creerUtilisateur);
router.get('/recuperer/:email', userController.recupererUtilisateur);

module.exports = router;
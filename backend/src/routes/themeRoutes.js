const express = require('express');
const router = express.Router();
const themeController = require('../controllers/themeController');

router.post('/creer', themeController.creerTheme);
router.get('/recuperer', themeController.recupererThemes);
router.delete('/supprimer/:nom', themeController.supprimerThemes);

module.exports = router;
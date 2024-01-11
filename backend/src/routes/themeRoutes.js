const express = require('express');
const router = express.Router();
const themeController = require('../controllers/themeController');

router.post('/creer', themeController.creerTheme);
router.get('/recuperer', themeController.recupererThemes);

module.exports = router;
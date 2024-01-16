const express = require('express');
const router = express.Router();
const payController = require('../controllers/payController');

router.post('/start', payController.coucou);

module.exports = router;
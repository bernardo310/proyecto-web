const express = require('express');
const router = express.Router();

const fondosController = require('../controllers/fondos');

router.get('/fondos', fondosController.getFondos);

module.exports = router;
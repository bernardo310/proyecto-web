const express = require('express');
const router = express.Router();

const buscarController = require('../controllers/buscar');
const buscarNoticiaController = require('../controllers/buscarNoticia');

router.get('/buscar', buscarController.getBuscar);
router.get('/buscarNoticia', buscarNoticiaController.getBuscarNoticia);

module.exports = router;
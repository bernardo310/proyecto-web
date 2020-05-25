const express = require('express');
const router = express.Router();

const buscarNoticiaController = require('../controllers/buscarNoticia');

router.get('/buscarNoticia', buscarNoticiaController.getBuscarNoticia);

module.exports = router;
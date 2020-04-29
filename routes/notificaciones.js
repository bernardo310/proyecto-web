const express = require('express');
const router = express.Router();

const notificacionesController = require('../controllers/notificaciones');

router.get('/notificaciones', notificacionesController.getDarDeAlta);

module.exports = router;
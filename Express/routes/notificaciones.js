const express = require('express');
const router = express.Router();

const notificacionesController = require('../controllers/notificaciones');

router.post('/notificaciones', notificacionesController.getDarDeAlta);

module.exports = router;
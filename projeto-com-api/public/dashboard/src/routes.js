const express = require('express');

const AcervoController = require('./controllers/AcervoController');
const AreaController = require('./controllers/AreaController');
const UsuarioController = require('./controllers/UsuarioController');
const SensorController = require('./controllers/SensorController');

const router = express.Router();

router.get('/acervo', AcervoController.index);
router.post('/acervo', AcervoController.create);

router.get('/area', AreaController.index);
router.post('/area', AreaController.create);

router.get('/usuario', UsuarioController.index);
router.post('/usuario', UsuarioController.create);

router.get('/sensor', SensorController.index);
router.post('/sensor', SensorController.create);

module.exports = router;
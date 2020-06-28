const express = require('express');

const AcervoController = require('./controllers/AcervoController');
const AreaController = require('./controllers/AreaController');
const UsuarioController = require('./controllers/UsuarioController');
const SensorController = require('./controllers/SensorController');
const SessaoController = require('./controllers/SessaoController');
const RelatorioController = require('./controllers/RelatorioController');

const router = express.Router();

router.get('/acervo', AcervoController.index);
router.post('/acervo', AcervoController.create);

router.get('/area/:acervo', AreaController.index);
router.post('/area', AreaController.create);
router.delete('/area/:id', AreaController.delete);

router.get('/usuario', UsuarioController.index);
router.post('/usuario', UsuarioController.create);

router.get('/sensor/:area', SensorController.index);
router.post('/sensor', SensorController.create);

router.post('/sessao', SessaoController.index);

router.get('/relatorio', RelatorioController.index);

module.exports = router;
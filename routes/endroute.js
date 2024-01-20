const express = require('express');
const endrouteRouter = express.Router();
const validarHora = require('../middlewares/validarHora.js')

endrouteRouter.get('/', validarHora, (req,res) => {
    res.send('<h1>Ruta Final</h1><h3>¡Has llegado al final del camino,viajero!</h3>')
})

module.exports = endrouteRouter;
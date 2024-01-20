const express = require('express');
const indexJs = express.Router();

indexJs.get('/', (req,res) => {
    const completeTime = req.dateType;
    let mensaje = '';
    if (req.query.mensaje) {
        mensaje = `<p>${req.query.mensaje}</p>`
    }
    res.send(`
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TimePass</title>
        </head>
        <body>
        <h1>WELCOME</h1>
        <div>ya son las  ${req.dateType}</div>
        ${mensaje}
        <a href="/endroute"><button>Entrar</button></a>
        </body>
    </html>

    `);
})


module.exports = indexJs;
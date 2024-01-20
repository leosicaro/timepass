const express = require('express');
const app = express();
const indexJs = require('./routes/index.js');
const endrouteRouter = require('./routes/endroute.js');
const horaMiddleware = require('./middlewares/horaMiddleware.js');

app.use(horaMiddleware);

app.use('/', indexJs);

app.use('/endroute', endrouteRouter);

app.use((req,res) => {
    res.status(404).send(`<h1>404 not found</h1>`)
});


app.listen(3000, () => {
    console.log(' http://localhost:3000');
});
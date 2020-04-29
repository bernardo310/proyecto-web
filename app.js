const express = require('express');
const bodyParser = require('body-parser');

const buscarRoutes = require('./routes/buscar');
const notificacionesRoutes = require('./routes/notificaciones');

const app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(buscarRoutes);
app.use(notificacionesRoutes);


app.listen(3000, () => {
    console.log('server running port 3000');
})
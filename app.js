const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)      
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin: "+origin;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);


app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

const buscarRoutes = require('./routes/buscar');
const notificacionesRoutes = require('./routes/notificaciones');

app.use(buscarRoutes);
app.use(notificacionesRoutes);

app.listen(4000, () => {
    console.log('server running port 4000');
})
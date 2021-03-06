const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const db = require('tnc_mysql_connector');

const allowedOrigins = ["https://noloscontrates.org", "https://www.noloscontrates.org"];

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
app.use(express.static(__dirname+"/build"))


const buscarRoutes = require('./routes/buscar');
const notificacionesRoutes = require('./routes/notificaciones');
const buscarNoticiaRoutes = require('./routes/noticia');
const fondosRoutes = require("./routes/fondos");

db.connect(
  
  ).then(()=>{
    app.use(buscarRoutes);
    app.use(notificacionesRoutes);
    app.use(buscarNoticiaRoutes);
    app.use(fondosRoutes);

    app.get("/*", (req, res) => {
      res.sendFile(__dirname+"/build/index.html");
    });
    
    app.listen(4000, () => {
        console.log('¡No Los Contrates! server running port 4000');
    })
  })
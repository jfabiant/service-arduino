const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const restful = require('./utils/restful');
const app = express();

/**
 * CONTROLLERs
 */
const arduinoController = require('./controllers/arduino');

// Morgan problem :/

/**
 * MIDDLEWAREs LIBRERIAS
 */
app.use(bodyParser.urlencoded({
  limit: '200mb',
  extended: false
}));
app.use(bodyParser.json({limit: '200mb'}));

/**
 * REGISTRO DE PUERTO Y SERVIDOR
 */
app.disable('x-powered-by');
app.set('port', '3000');
app.set('host', '127.0.0.1');

/**
 * REGISTRO DE ROUTES
 */
app.all('/', (req, res) => {
  restful(req, res, {
    get: function (req, res) {
        res.status(200).send('SERVICIO ARDUINO');
    }
  });
});
app.all('/arduino', arduinoController.arduinodatos);

app.listen(app.get('port'), app.get('host'), ()=>{
    console.log(`Servidor corriendo en http://${app.get('host')}:${app.get('port')}`);
});



const axios = require('axios');
const restful = require('../utils/restful');

/**
 * GET /arduinodatos
 */
exports.arduinodatos = (req, res) => {
  restful(req, res, {
    get: async function (req, res) {
      try {
        //res.type('application/json').send(responseEvaluacion.data);
        res.json({message: "Servicio arduino"});
      } catch (e) {
        console.log(e.message)
      }
    }
  })
};

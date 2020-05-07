let db;
/**
* insertAlerta
* @summary Call to procedure insertAlerta
* @param {Number} idReporte
* @param {Number} idColumna
* @param {String} valorDeBusqueda
* @param {String} correo
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	insertAlerta(1, 1, 'stringExample', 'stringExample')
*/

const insertAlerta = async (idReporte, idColumna, valorDeBusqueda, correo) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('insertAlerta',idReporte, idColumna, valorDeBusqueda, correo));
}
module.exports = {
   insertAlerta
}
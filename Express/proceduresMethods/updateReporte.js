let db;
/**
* updateReporte
* @summary Call to procedure updateReporte
* @param {Number} idReporte
* @param {String} nombre
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	updateReporte(1, 'stringExample')
*/

const updateReporte = async (idReporte, nombre) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('updateReporte',idReporte, nombre));
}
module.exports = {
   updateReporte
}
let db;
/**
* insertColumnaReporte
* @summary Call to procedure insertColumnaReporte
* @param {Number} idReporte
* @param {Number} idColumna
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	insertColumnaReporte(1, 1)
*/

const insertColumnaReporte = async (idReporte, idColumna) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('insertColumnaReporte',idReporte, idColumna));
}
module.exports = {
   insertColumnaReporte
}
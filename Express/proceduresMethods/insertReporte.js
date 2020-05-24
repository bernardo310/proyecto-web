let db;
/**
* insertReporte
* @summary Call to procedure insertReporte
* @param {String} nombre
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	insertReporte('stringExample')
*/

const insertReporte = async (nombre) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('insertReporte',nombre));
}
module.exports = {
   insertReporte
}
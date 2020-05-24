let db;
/**
* getReporte
* @summary Call to procedure getReporte
* @param {String} nombre
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	getReporte('stringExample')
*/

const getReporte = async (nombre) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('getReporte',nombre));
}
module.exports = {
   getReporte
}
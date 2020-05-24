let db;
/**
* getColumna
* @summary Call to procedure getColumna
* @param {String} nombre
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	getColumna('stringExample')
*/

const getColumna = async (nombre) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('getColumna',nombre));
}
module.exports = {
   getColumna
}
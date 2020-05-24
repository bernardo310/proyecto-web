let db;
/**
* insertColumna
* @summary Call to procedure insertColumna
* @param {String} nombre
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	insertColumna('stringExample')
*/

const insertColumna = async (nombre) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('insertColumna',nombre));
}
module.exports = {
   insertColumna
}
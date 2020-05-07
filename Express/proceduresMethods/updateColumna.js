let db;
/**
* updateColumna
* @summary Call to procedure updateColumna
* @param {Number} idColumna
* @param {String} nombre
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	updateColumna(1, 'stringExample')
*/

const updateColumna = async (idColumna, nombre) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('updateColumna',idColumna, nombre));
}
module.exports = {
   updateColumna
}
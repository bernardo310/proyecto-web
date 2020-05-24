let db;
/**
* updateValorPrevio
* @summary Call to procedure updateValorPrevio
* @param {String} nombre
* @param {Number} valorNuevo
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	updateValorPrevio('stringExample', 1)
*/

const updateValorPrevio = async (nombre, valorNuevo) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('updateValorPrevio',nombre, valorNuevo));
}
module.exports = {
   updateValorPrevio
}
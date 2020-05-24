let db;
/**
* deleteColumna
* @summary Call to procedure deleteColumna
* @param {Number} idColumna
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	deleteColumna(1)
*/

const deleteColumna = async (idColumna) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('deleteColumna',idColumna));
}
module.exports = {
   deleteColumna
}
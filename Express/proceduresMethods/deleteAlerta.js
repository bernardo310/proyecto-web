let db;
/**
* deleteAlerta
* @summary Call to procedure deleteAlerta
* @param {Number} idAlerta
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	deleteAlerta(1)
*/

const deleteAlerta = async (idAlerta) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('deleteAlerta',idAlerta));
}
module.exports = {
   deleteAlerta
}
let db;
/**
* getAllAlertas
* @summary Call to procedure getAllAlertas
* @param {} 
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	getAllAlertas()
*/

const getAllAlertas = async () => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('getAllAlertas',));
}
module.exports = {
   getAllAlertas
}
let db;
/**
* getCorreosFuncionario
* @summary Call to procedure getCorreosFuncionario
* @param {String} nombre
* @return {Array} Returns array of results if procedure has a SELECT 
* @example
*
*	getCorreosFuncionario('stringExample')
*/

const getCorreosFuncionario = async (nombre) => {
   if(!db) db = require("tnc_mysql_connector");
   return (await db.queryProcedure('getCorreosFuncionario',nombre));
}
module.exports = {
   getCorreosFuncionario
}
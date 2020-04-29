const db = require('tnc_mysql_connector');

exports.getDarDeAlta = async (req, res, next) => {
    const correo = req.body.correo; 
    const reporte = req.body.reporte; 
    const columna = req.body.columna; 
    const valor = req.body.valor; 

    // 1 insertar reporte
    try {
        await db.procedures.insertReporte(reporte)[0];
    } catch(err) {
        console.log(err);
    }
    

    res.status(200).json({
        prueba: 'yes'
    });
}
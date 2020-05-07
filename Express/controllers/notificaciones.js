const db = require('tnc_mysql_connector');

exports.getDarDeAlta = async (req, res, next) => {
    const correo = req.body.correo; 
    const reporte = req.body.reporte; 
    const columna = req.body.columna; 
    const valorBusqueda = req.body.valorBusqueda;
    const valorPrevio=req.body.valorPrevio; 

    // 1 insertar reporte
    try {
        const result=(await db.procedures.insertReporte(reporte));
        idReporte=(result[0].idReporte);
    } catch(err) {
        console.log(err);
    }


    //Insertar ColumnaReporte
    try {
        const result=(await db.procedures.insertColumnaReporte(idReporte,idColumna));
    } catch(err) {
        console.log(err);
    }

    //Insertar Alerta
    try {
        const result=(await db.procedures.insertAlerta(idReporte,idColumna, valor, correo));
    } catch(err) {
        console.log(err);
    }
    
    res.status(200);

}
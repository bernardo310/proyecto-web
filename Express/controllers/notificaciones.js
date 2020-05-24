const db = require('tnc_mysql_connector');

exports.getDarDeAlta = async (req, res, next) => {
    const correo = req.body.correo; 
    const reporte = req.body.reporte; 
    const columna = req.body.columna; 
    const valorBusqueda = req.body.valorBusqueda;
    const valorPrevio=req.body.valorPrevio; 

    //Insertar Alerta
    try {
        const idReporte=(await db.procedures.getReporte(reporte));
        const idColumna=(await db.procedures.getColumna(columna));

        await db.procedures.insertAlerta(idReporte[0].idReporte,idColumna[0].idColumna, valorBusqueda, correo,valorPrevio);
        res.status(200).send();
    } catch(err) {
        console.log(err);
    }
    

}
const db = require('tnc_mysql_connector');

exports.getDarDeAlta = async (req, res, next) => {
    const correo = req.body.correo; 
    const reporte = req.body.reporte; 
    const columna = req.body.columna; 
    const valorBusqueda = req.body.valorBusqueda;
    const valorPrevio=req.body.valorPrevio; 

    //Insertar Alerta
    try {
        const result=(await db.procedures.insertAlerta(reporte,columna, valorBusqueda, correo,valorPrevio));
        res.status(200);
    } catch(err) {
        console.log(err);
    }
    

}
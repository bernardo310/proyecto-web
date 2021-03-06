const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const db = require('tnc_mysql_connector');
const buscarController = require('../controllers/buscar');

exports.getDarDeAlta = async (req, res, next) => {
    const correo = req.body.correo;
    const reporte = req.body.reporte;
    const columna = req.body.columna;
    const valorBusqueda = req.body.valorBusqueda;
    const valorPrevio = req.body.valorPrevio;

    //Insertar Alerta
    try {
        //const idReporte = (await db.procedures.getReporte(reporte));
        //const idColumna = (await db.procedures.getColumna(columna));

        await db.procedures.insertAlerta(1, 1, valorBusqueda, correo, valorPrevio);
    } catch (err) {
        console.log(err);
    }


    res.status(200).json({
        prueba: 'yes'
    });
}

exports.borrarAlerta = async (req, res, next) => {
    id = req.query.id;
    console.log(id);
    try {
        await db.procedures.deleteAlerta(id);
        console.log('se borro la notificacion',id);
    } catch (err) {
        console.log(err);
    }
    res.status(200).redirect('http://localhost:3000');  //CAMBIAR A NOLOSCONSTRASTRE
}

//0 0 0*/6 * * *   cada 6h
schedule.scheduleJob('0 0*/1 * * * *', async function () {
    console.log('\ncorriendo schedule job');

    var transporter = nodemailer.createTransport({
        host: 'noloscontrates.org',
        port: 465,
        auth: {
            user: 'notificaciones@noloscontrates.org',
            pass: '#noloscontrates2020!'
        }
    });

    try {
        //conseguir alertas registradas
        const alertas = (await db.procedures.getAllAlertas());
        //iterar alertas
        for (const e of alertas) {
            console.log('checando alerta:',e);
            const registrosActuales = await buscarController.getValorActual(e.valorDeBusqueda);
            //const registrosActuales = await buscarController.getValorActual('Homero');
            console.log('registros actuales', registrosActuales)
            if (registrosActuales != e.valorPrevio) {    //si es diferente conseguir lista de correos
                const correos = (await db.procedures.getCorreosFuncionario(e.valorDeBusqueda));
                console.log(correos);
                for (const c of correos) {


                    var mailOptions = {
                        from: 'notificaciones@noloscontrates.org',
                        to: c.correo,
                        subject: 'Hay un nuevo reporte',
    
                        html: `<p>Hay un nuevo reporte para ${e.valorDeBusqueda} de Sanciones Administrativas de Inhabilitación 
                        impuestas a un servidor público.<br>Ingresa a <a href="https://noloscontrates.org">NoLosContrates</a> para ver más detalles.<br><br>
                        Si ya no quieres recibir notificaciones, haz click en: https://noloscontrates.org/borrarAlerta?id=${c.idAlerta}</p>`
                    };

                    await transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });

                };
                await db.procedures.updateValorPrevio(e.valorDeBusqueda, registrosActuales);
                console.log('actualizado num registros');
            } else {
                console.log('no hay nuevos registros para',e.valorDeBusqueda);
            }
        }


    } catch (err) {
        console.log(err);
    }


})

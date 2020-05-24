const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
const db = require('tnc_mysql_connector');

exports.getDarDeAlta = async (req, res, next) => {
    const correo = req.body.correo; 
    const reporte = req.body.reporte; 
    const columna = req.body.columna; 
    const valor = req.body.valor; 
    const registros = req.body.registros

    // 1 insertar reporte
    try {
        await db.procedures.insertAlerta(reporte, columna, valor, correo, registros)[0];
    } catch(err) {
        console.log(err);
    }
    

    res.status(200).json({
        prueba: 'yes'
    });
}

//0 0 0*/6 * * *   cada 6h
schedule.scheduleJob('0 0*/1 * * * *', function() {
    console.log('test');
    //obtener gente registrada para alertas

    //iterar cada uno y checar si hay registros nuevos

    //si hay mas, mandar correo y actualizar n registros


    var transporter = nodemailer.createTransport({
        host: 'thenorthcode.com',
        port: 465,
        auth: {
          user: 'orlando.torres@thenorthcode.com',
          pass: 'Or01081999'
        }
      });
      
      var mailOptions = {
        from: 'orlando.torres@thenorthcode.com',
        to: 'bernardo.cardenas@udem.edu',
        subject: 'Sending Email using Node.js',
        text: 'That was very easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

})
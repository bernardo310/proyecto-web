const fetch = require('node-fetch');

exports.getBuscarNoticia = async (req, res, next) => {
    await fetch(`https://gnews.io/api/v3/search?q=${req.query.nombre}&token=a83784800dc5f6f078adc53e12ebd522&max=4&image=required`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            res.status(200).json({
                resp: data
            });
        });






}


exports.getBuscarNoticia = async (req, res, next) => {
    res.status(200).json({
        //buscar noticias
        noticias: 'yes'
    });
}
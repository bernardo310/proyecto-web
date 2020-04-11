class Registro {
    constructor(servidorPublico, dependencia, sancionImpuesta, expediente, autoridad, fechaResol, causa, monto, inicio, fin) {
        this.servidorPublico = servidorPublico;
        this.dependencia = dependencia;
        this.sancionImpuesta = sancionImpuesta;
        this.expediente = expediente;
        this.autoridad = autoridad;
        this.fechaResol = fechaResol;
        this.causa = causa; 
        this.monto = monto;
        this.inicio = inicio;
        this.fin = fin;
    }
}

module.exports = Registro;
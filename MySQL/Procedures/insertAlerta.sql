DROP PROCEDURE IF EXISTS insertAlerta;
DELIMITER //
CREATE PROCEDURE insertAlerta(IN input_idReporte INT, IN input_idColumna INT, IN input_valorDeBusqueda varchar(45), IN input_correo varchar(70),IN input_valorPrevio varchar(140))
BEGIN
INSERT INTO Alerta(idReporte,idColumna,valorDeBusqueda,correo,valorPrevio) values (input_idReporte,input_idColumna,input_valorDeBusqueda,input_correo,input_valorPrevio);
END //
DELIMITER ;
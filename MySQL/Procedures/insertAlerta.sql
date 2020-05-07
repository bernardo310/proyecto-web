DROP PROCEDURE IF EXISTS insertAlerta;
DELIMITER //
CREATE PROCEDURE insertAlerta(IN input_idReporte INT, IN input_idColumna INT, IN input_valorDeBusqueda varchar(45), IN input_correo varchar(70))
BEGIN
INSERT INTO Alerta(idReporte,idColumna,valorDeBusqueda,correo) values (input_idReporte,input_idColumna,valorDeBusqueda,correo);
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS insertColumnaReporte;
DELIMITER //
CREATE PROCEDURE insertColumnaReporte(IN input_idReporte INT, IN input_idColumna INT)
BEGIN
INSERT INTO ColumnaReporte(idReporte, idColumna) values (input_idReporte, input_idColumna);
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS insertColumnaReporte;
DELIMITER //
CREATE PROCEDURE insertColumnaReporte(IN input_idReporte INT, IN input_idColumna INT, IN input_orden INT)
BEGIN
INSERT INTO ColumnaReporte(idReporte, idColumna,orden) values (input_idReporte, input_idColumna, input_orden);
END //
DELIMITER ;
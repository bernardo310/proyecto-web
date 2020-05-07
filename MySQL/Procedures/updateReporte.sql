DROP PROCEDURE IF EXISTS updateReporte;
DELIMITER //
CREATE PROCEDURE updateReporte(IN input_idReporte INT, IN input_nombre varchar(100))
BEGIN
UPDATE Reporte set nombre=input_nombre where idReporte=input_idReporte;
END //
DELIMITER ;
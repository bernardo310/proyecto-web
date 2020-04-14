DROP PROCEDURE IF EXISTS insertReporte;
DELIMITER //
CREATE PROCEDURE insertReporte(IN input_nombre varchar(100))
BEGIN
INSERT INTO Reporte(nombre) values (input_nombre);
END //
DELIMITER ;
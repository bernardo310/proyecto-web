DROP PROCEDURE IF EXISTS getReporte;
DELIMITER //
CREATE PROCEDURE getReporte(IN input_nombre varchar(100))
BEGIN
SELECT idReporte FROM Reporte where nombre=input_nombre;
END //
DELIMITER ;
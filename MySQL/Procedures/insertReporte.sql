DROP PROCEDURE IF EXISTS insertReporte;
DELIMITER //
CREATE PROCEDURE insertReporte(IN input_nombre varchar(100))
BEGIN
INSERT INTO Reporte(nombre) values (input_nombre);
SELECT idReporte FROM Reporte order by idReporte desc limit 1;
END //
DELIMITER ;
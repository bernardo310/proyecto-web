DROP PROCEDURE IF EXISTS getColumna;
DELIMITER //
CREATE PROCEDURE getColumna(IN input_nombre varchar(100))
BEGIN
SELECT idColumna FROM Columna where nombre=input_nombre;
END //
DELIMITER ;
DROP PROCEDURE IF EXISTS insertColumna;
DELIMITER //
CREATE PROCEDURE insertColumna(IN input_nombre varchar(100))
BEGIN
INSERT INTO Columna(nombre) values (input_nombre);
END //
DELIMITER ;
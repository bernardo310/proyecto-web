DROP PROCEDURE IF EXISTS insertColumna;
DELIMITER //
CREATE PROCEDURE insertColumna(IN input_nombre varchar(100))
BEGIN
INSERT INTO Columna(nombre) values (input_nombre);
SELECT idColumna FROM Columna order by idColumna desc limit 1;
END //
DELIMITER ;
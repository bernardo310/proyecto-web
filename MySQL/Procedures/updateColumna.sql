DROP PROCEDURE IF EXISTS updateColumna;
DELIMITER //
CREATE PROCEDURE updateColumna(IN input_idColumna INT, IN input_nombre varchar(100))
BEGIN
UPDATE Columna set nombre=input_nombre where idColumna=input_idColumna;
END //
DELIMITER ;
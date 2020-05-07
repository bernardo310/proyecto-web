DROP PROCEDURE IF EXISTS deleteColumna;
DELIMITER //
CREATE PROCEDURE deleteColumna(IN input_idColumna INT)
BEGIN
DELETE FROM Columna where idColumna=input_idColumna;
END //
DELIMITER ;
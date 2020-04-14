DROP PROCEDURE IF EXISTS deleteAlerta;
DELIMITER //
CREATE PROCEDURE deleteAlerta(IN input_idAlerta INT)
BEGIN
DELETE FROM Alerta where idAlerta=input_idAlerta;
END //
DELIMITER ;
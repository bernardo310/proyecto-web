DROP PROCEDURE IF EXISTS updateValorPrevio;
DELIMITER //
CREATE PROCEDURE updateValorPrevio(IN input_nombre varchar(100), IN input_valorNuevo INT)
BEGIN
UPDATE Alerta set valorPrevio=input_valorNuevo where valorDeBusqueda=input_nombre;
END //
DELIMITER ;
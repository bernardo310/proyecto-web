DROP PROCEDURE IF EXISTS getCorreosFuncionario;
DELIMITER //
CREATE PROCEDURE getCorreosFuncionario(IN input_nombre varchar(100))
BEGIN
SELECT DISTINCT correo FROM Alerta where valorDeBusqueda=input_nombre;
END //
DELIMITER ;
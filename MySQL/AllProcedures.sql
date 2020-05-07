DROP PROCEDURE IF EXISTS deleteAlerta;
DELIMITER //
CREATE PROCEDURE deleteAlerta(IN input_idAlerta INT)
BEGIN
DELETE FROM Alerta where idAlerta=input_idAlerta;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS deleteColumna;
DELIMITER //
CREATE PROCEDURE deleteColumna(IN input_idColumna INT)
BEGIN
DELETE FROM Columna where idColumna=input_idColumna;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS getColumna;
DELIMITER //
CREATE PROCEDURE getColumna(IN input_nombre varchar(100))
BEGIN
SELECT count(*)as existe FROM Columna where nombre=input_nombre;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS insertAlerta;
DELIMITER //
CREATE PROCEDURE insertAlerta(IN input_idReporte INT, IN input_idColumna INT, IN input_valorDeBusqueda varchar(45), IN input_correo varchar(70))
BEGIN
INSERT INTO Alerta(idReporte,idColumna,valorDeBusqueda,correo) values (input_idReporte,input_idColumna,valorDeBusqueda,correo);
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS insertColumna;
DELIMITER //
CREATE PROCEDURE insertColumna(IN input_nombre varchar(100))
BEGIN
INSERT INTO Columna(nombre) values (input_nombre);
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS insertColumnaReporte;
DELIMITER //
CREATE PROCEDURE insertColumnaReporte(IN input_idReporte INT, IN input_idColumna INT, IN input_orden INT)
BEGIN
INSERT INTO ColumnaReporte(idReporte, idColumna,orden) values (input_idReporte, input_idColumna, input_orden);
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS insertReporte;
DELIMITER //
CREATE PROCEDURE insertReporte(IN input_nombre varchar(100))
BEGIN
INSERT INTO Reporte(nombre) values (input_nombre);
SELECT last_insert_id() from Reporte;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS updateColumna;
DELIMITER //
CREATE PROCEDURE updateColumna(IN input_idColumna INT, IN input_nombre varchar(100))
BEGIN
UPDATE Columna set nombre=input_nombre where idColumna=input_idColumna;
END //
DELIMITER ;

DROP PROCEDURE IF EXISTS updateReporte;
DELIMITER //
CREATE PROCEDURE updateReporte(IN input_idReporte INT, IN input_nombre varchar(100))
BEGIN
UPDATE Reporte set nombre=input_nombre where idReporte=input_idReporte;
END //
DELIMITER ;


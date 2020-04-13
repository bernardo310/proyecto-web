-- MySQL Script generated by MySQL Workbench
-- Mon Apr 13 16:43:47 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema afivdabi_noloscontrates_dev
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema afivdabi_noloscontrates_dev
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `afivdabi_noloscontrates_dev` DEFAULT CHARACTER SET utf8 ;
USE `afivdabi_noloscontrates_dev` ;

-- -----------------------------------------------------
-- Table `afivdabi_noloscontrates_dev`.`Columna`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afivdabi_noloscontrates_dev`.`Columna` (
  `idColumna` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idColumna`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `afivdabi_noloscontrates_dev`.`Reporte`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afivdabi_noloscontrates_dev`.`Reporte` (
  `idReporte` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idReporte`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `afivdabi_noloscontrates_dev`.`ColumnaReporte`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afivdabi_noloscontrates_dev`.`ColumnaReporte` (
  `idColumna` INT NOT NULL,
  `idReporte` INT NOT NULL,
  `orden` INT NOT NULL,
  PRIMARY KEY (`idColumna`, `idReporte`),
  INDEX `fk_Columna_has_Reporte_Reporte1_idx` (`idReporte` ASC) ,
  INDEX `fk_Columna_has_Reporte_Columna_idx` (`idColumna` ASC) ,
  CONSTRAINT `fk_Columna_has_Reporte_Columna`
    FOREIGN KEY (`idColumna`)
    REFERENCES `afivdabi_noloscontrates_dev`.`Columna` (`idColumna`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Columna_has_Reporte_Reporte1`
    FOREIGN KEY (`idReporte`)
    REFERENCES `afivdabi_noloscontrates_dev`.`Reporte` (`idReporte`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `afivdabi_noloscontrates_dev`.`Alerta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `afivdabi_noloscontrates_dev`.`Alerta` (
  `idAlerta` INT NOT NULL AUTO_INCREMENT,
  `idReporte` INT NOT NULL,
  `idColumna` INT NOT NULL,
  `valorDeBusqueda` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(70) NOT NULL,
  PRIMARY KEY (`idAlerta`),
  INDEX `fk_Alerta_ColumnaReporte1_idx` (`idReporte` ASC) ,
  INDEX `fk_Alerta_ColumnaReporte2_idx` (`idColumna` ASC) ,
  CONSTRAINT `fk_Alerta_ColumnaReporte1`
    FOREIGN KEY (`idReporte`)
    REFERENCES `afivdabi_noloscontrates_dev`.`ColumnaReporte` (`idReporte`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Alerta_ColumnaReporte2`
    FOREIGN KEY (`idColumna`)
    REFERENCES `afivdabi_noloscontrates_dev`.`ColumnaReporte` (`idColumna`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema dbApp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbApp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbApp` DEFAULT CHARACTER SET utf8 ;
USE `dbApp` ;

-- -----------------------------------------------------
-- Table `dbApp`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbApp`.`User` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(50) NOT NULL,
  `Phone` VARCHAR(50) NOT NULL,
  `eMail` VARCHAR(100) NOT NULL,
  `Birthday` DATETIME NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

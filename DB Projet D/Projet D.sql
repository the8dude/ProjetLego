---------------------------------
-- Utilisation DataBase master --
---------------------------------
use master
go

--------------------------
-- Suppression DataBase --
--------------------------
drop database ProjetD
go

-----------------------
-- Cr�ation DataBase --
-----------------------
create database ProjetD
go

--------------------------
-- Utilisation DataBase --
--------------------------
use ProjetD
go

-----------------------------
-- Cr�ation table DataBase --
-----------------------------

-- Table Serie --
create table Serie (
	IdSerie varchar (50) NOT NULL,
	NomSerie varchar(50) NOT NULL,
	PRIMARY KEY (IdSerie)
)
go

-- Table Minifig --
create table Minifig (
	IdMinifig int NOT NULL,
	NomMinifig varchar(50) NULL,
	IdSerie varchar(50) REFERENCES Serie(IdSerie) NOT NULL,
	PRIMARY KEY (IdMinifig)
)
go




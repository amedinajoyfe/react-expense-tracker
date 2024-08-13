CREATE DATABASE IF NOT EXISTS expensetracker;
USE expensetracker;

DROP TABLE IF EXISTS movements;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
		id VARCHAR(36) PRIMARY KEY,
        username VARCHAR(32) NOT NULL,
        email VARCHAR(128) NOT NULL,
        userpassword VARCHAR (64) NOT NULL,
        buycategories VARCHAR(212) NOT NULL,
        earncategories VARCHAR(212) NOT NULL,
        userlanguage ENUM ("EN", "ES") DEFAULT "EN",
        lastupdate TIMESTAMP DEFAULT NOW()
);

CREATE TABLE movements (
		id VARCHAR(36) PRIMARY KEY,
        userid VARCHAR(36) NOT NULL,
        expense BOOL NOT NULL,
        category VARCHAR(12) NOT NULL,
        amount DECIMAL(8,2) NOT NULL,
        creationdate TIMESTAMP NOT NULL DEFAULT NOW(),
	FOREIGN KEY (userid) REFERENCES users(id)
);

DROP TRIGGER IF EXISTS on_movement_insert

DELIMITER $$

CREATE TRIGGER on_movement_insert 
AFTER INSERT ON movements 
FOR EACH ROW
BEGIN
	UPDATE users SET lastupdate = NOW() WHERE id = NEW.userid;
END$$

DELIMITER ;

INSERT INTO users VALUES ("d3c69b4c-3c2e-49b7-9e8a-0f9cfcf3cb5a", "Alejandro", "alexmedina0359@gmail.com", "$2b$10$G.IidDLu.24Y1PrsLnVmguW39H7IYDaF3nAAvT8A9QLBIY0ugaQxC", "Comida,Viajes,Ropa,Salir,Casa", "Sueldo,Efectivo", "ES", NOW()), ("2a7c6b10-1e4b-4f3a-a27d-8b6ed5dfc476", "Medina", "alexmedina0360@gmail.com", "$2b$10$G.IidDLu.24Y1PrsLnVmguW39H7IYDaF3nAAvT8A9QLBIY0ugaQxC", "Regalos,Juegos,Comida", "Sueldo,Regalos", "EN", NOW());
INSERT INTO movements VALUES("4f77a7d9-5d88-4f2b-8b6f-d7b6c340cfb7", "d3c69b4c-3c2e-49b7-9e8a-0f9cfcf3cb5a", TRUE, "Comida", 12.5, NOW()), ("6e8f1f27-8a29-4d36-977e-2f3fcf1e99e9", "d3c69b4c-3c2e-49b7-9e8a-0f9cfcf3cb5a", TRUE, "Comida", 232.43, NOW()), ("9f0c2b40-3b9a-4112-8f3f-1df88f9d88b", "d3c69b4c-3c2e-49b7-9e8a-0f9cfcf3cb5a", TRUE, "Viajes", 214.88, NOW()), ("e14b8a6e-38d9-4e9d-934a-5b4e0f3c8a9e", "d3c69b4c-3c2e-49b7-9e8a-0f9cfcf3cb5a", FALSE, "Sueldo", 1230, NOW()), ("d0eeb0c3-04d8-4d72-8b6a-38fc9a7ec4b4", "2a7c6b10-1e4b-4f3a-a27d-8b6ed5dfc476", TRUE, "Juegos", 79.99, NOW()), ("8b9b4524-1c6e-41d5-8aaf-51cfd1c16b37", "2a7c6b10-1e4b-4f3a-a27d-8b6ed5dfc476", TRUE, "Comida", 17.20, NOW());
CREATE DATABASE IF NOT EXISTS expensetracker;
USE expensetracker;

DROP TABLE IF EXISTS movements;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
		id VARCHAR(8) PRIMARY KEY,
        username VARCHAR(32) NOT NULL,
        email VARCHAR(128) NOT NULL,
        userpassword VARCHAR (64) NOT NULL,
        buycategories VARCHAR(212) NOT NULL,
        earncategories VARCHAR(212) NOT NULL,
        userlanguage ENUM ("EN", "ES") DEFAULT "EN",
        lastupdate TIMESTAMP DEFAULT NOW()
);

CREATE TABLE movements (
		id VARCHAR(16) PRIMARY KEY,
        userid VARCHAR(8) NOT NULL,
        expense BOOL NOT NULL,
        category VARCHAR(12) NOT NULL,
        amount DECIMAL(8,2) NOT NULL,
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

INSERT INTO users VALUES ("a8cDd.0p", "Alejandro", "alexmedina0359@gmail.com", "$2b$10$G.IidDLu.24Y1PrsLnVmguW39H7IYDaF3nAAvT8A9QLBIY0ugaQxC", "Comida,Viajes,Ropa,Salir,Casa", "Sueldo,Efectivo", "ES", NOW()), ("45Piufd_", "Medina", "alexmedina0360@gmail.com", "$2b$10$G.IidDLu.24Y1PrsLnVmguW39H7IYDaF3nAAvT8A9QLBIY0ugaQxC", "Regalos,Juegos,Comida", "Sueldo,Regalos", "EN", NOW());
INSERT INTO movements VALUES("D4rA~9aZkP_lq8J7", "a8cDd.0p", TRUE, "Comida", 12.5), ("mQ1~R2-F.Xz9yTpG", "a8cDd.0p", TRUE, "Comida", 232.43), ("k8L~W4_aN7Yb-Zj9", "a8cDd.0p", TRUE, "Viajes", 214.88), ("3vX-P1wU~Q8s.LzA", "a8cDd.0p", FALSE, "Sueldo", 1230), ("z7G~k9R_2J1Q-Lm8", "45Piufd_", TRUE, "Juegos", 79.99), ("X0Y~8r-A1bZ7_tk9", "45Piufd_", TRUE, "Comida", 17.20);
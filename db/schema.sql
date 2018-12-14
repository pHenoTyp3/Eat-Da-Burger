DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    date TIMESTAMP,
	id INT (10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

INSERT INTO burgers(burger_name,devoured)
VALUES("Beef Double Cheese Burger",0);

INSERT INTO burgers(burger_name,devoured)
VALUES("Patty Melt Burger",0);

INSERT INTO burgers(burger_name,devoured)
VALUES("Mushroom & Swiss Double Cheese Burger",0);

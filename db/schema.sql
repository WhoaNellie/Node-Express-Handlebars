-- drop if exists

CREATE DATABASE dt8czq68kv5bxqhk;
USE dt8czq68kv5bxqhk;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt timestamp default current_timestamp NOT NULL,
	PRIMARY KEY (id)
);

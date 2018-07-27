CREATE DATABASE burger_db;
USE burger_db;

-- Create the table burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
devoured boolean default false,
PRIMARY KEY (id)
);
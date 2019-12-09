CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(

    id INT NOT NULL (5) AUTO_INCREMENT,
    burger_name VARCHAR (40) NOT NULL,
    devoured BOOLEAN DEFAULT false,

    primary key (id)
)
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(

    id INT (5) AUTO_INCREMENT,
    burger_name (40) VARCHAR,
    devoured BOOLEAN

    primary key (id)
)
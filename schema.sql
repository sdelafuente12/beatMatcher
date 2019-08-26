DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;



-- this table used to have items instead of news
CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE jokes (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE pickups (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE facts (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

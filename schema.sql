DROP DATABASE IF EXISTS beatMatcher;

CREATE DATABASE beatMatcher;

USE beatMatcher;



-- this table used to have items instead of news
CREATE TABLE songsSearched (
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  artist VARCHAR(50) NOT NULL
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

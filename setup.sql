CREATE DATABASE inventory;

USE inventory;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    quantity INT NOT NULL,
    color VARCHAR(50),
    popularity INT DEFAULT 0
);
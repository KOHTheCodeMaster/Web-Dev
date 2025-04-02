
-- Drop tables if they exist
DROP TABLE IF EXISTS CATEGORY;
DROP TABLE IF EXISTS SUBCATEGORY;
DROP TABLE IF EXISTS PRODUCT;


-- Create table for category
CREATE TABLE category
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Create table for subcategory
CREATE TABLE SUBCATEGORY
(
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL,
    name       TEXT    NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category (id)
);

-- Create table for PRODUCT
CREATE TABLE PRODUCT
(
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id    INTEGER NOT NULL,
    subCategory_id INTEGER NOT NULL,
    name          TEXT    NOT NULL,
    price         REAL    NOT NULL,
    unit_label     TEXT    NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category (id),
    FOREIGN KEY (subCategory_id) REFERENCES subcategory (id)
);

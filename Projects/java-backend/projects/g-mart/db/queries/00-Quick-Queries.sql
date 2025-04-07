-- Drop tables if they exist
DROP TABLE IF EXISTS CATEGORY;
DROP TABLE IF EXISTS SUBCATEGORY;
DROP TABLE IF EXISTS PRODUCT;
DROP TABLE IF EXISTS PRODUCT_UNIT_LABEL;


-- Create Tables

-- Create table for category
CREATE TABLE category
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Create table for subcategory
CREATE TABLE SUBCATEGORY
(
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL,
    name        TEXT    NOT NULL,
    FOREIGN KEY (category_id) REFERENCES category (id)
);

-- Create table for PRODUCT
CREATE TABLE PRODUCT
(
    id                    INTEGER PRIMARY KEY AUTOINCREMENT,
    name                  TEXT    NOT NULL,
    price                 REAL    NOT NULL,
    product_unit_value    REAL    NOT NULL,
    product_unit_label_id INTEGER NOT NULL,
    category_id           INTEGER NOT NULL,
    subCategory_id        INTEGER NOT NULL,
    FOREIGN KEY (product_unit_label_id) REFERENCES PRODUCT_UNIT_LABEL (id),
    FOREIGN KEY (category_id) REFERENCES category (id),
    FOREIGN KEY (subCategory_id) REFERENCES subcategory (id)
);


-- Create table for PRODUCT_UNIT_LABEL
CREATE TABLE PRODUCT_UNIT_LABEL
(
    id    INTEGER PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL
);


---

-- Select all data from the tables

SELECT *
FROM category;

SELECT *
FROM subcategory;

SELECT *
FROM product;

SELECT *
FROM product_unit_label;

---

-- Delete all data from the tables
/*

DELETE
FROM CATEGORY
WHERE id > 0;

DELETE
FROM SUBCATEGORY
WHERE id > 0;

DELETE
FROM PRODUCT
WHERE id > 0;

DELETE
FROM PRODUCT_UNIT_LABEL
WHERE id > 0;
*/

---

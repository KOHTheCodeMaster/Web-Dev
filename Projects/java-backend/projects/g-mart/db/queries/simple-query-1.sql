
SELECT * FROM SQLITE_MASTER WHERE TYPE='table' AND NAME='category';

DROP TABLE IF EXISTS CATEGORY;

CREATE TABLE category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

---

SELECT * FROM category;

-- Insert 3 Sample Categories
INSERT INTO CATEGORY (NAME) VALUES ('Vegetables & Fruits'), ('Dairy & Breakfast'), ('Munchies');


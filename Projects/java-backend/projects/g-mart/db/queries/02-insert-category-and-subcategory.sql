------------------ INSERT CATEGORY DATA ------------------

-- Insert Category Data
INSERT INTO CATEGORY (NAME)
VALUES ('Vegetables & Fruits'),
       ('Dairy & Breakfast'),
       ('Munchies'),
       ('Cold Drinks & Juices'),
       ('Instant & Frozen Food'),
       ('Tea, Coffee & Health Drinks'),
       ('Bakery & Biscuits');

------------------ INSECT SUBCATEGORY DATA ------------------

/*

-- Insert Subcategory Data
INSERT INTO SUBCATEGORY (CATEGORY_ID, NAME)
VALUES (1, 'Fresh Vegetables'),
       (1, 'Fresh Fruits'),
       (1, 'Mangoes & Melons'),
       (1, 'Seasonal'),
       (1, 'Exotics'),
       (2, 'Milk'),
       (2, 'Bread & Pav'),
       (2, 'Eggs'),
       (2, 'Flakes & Kids Cereals'),
       (2, 'Muesli & Granola'),
       (3, 'Chips & Crisps'),
       (3, 'Rusks & Wafers'),
       (3, 'Energy Bars'),
       (3, 'Nachos'),
       (3, 'Bhujia & Mixtures'),
       (4, 'Beverages Gift Packs'),
       (4, 'Soft Drinks'),
       (4, 'Fruit Juices'),
       (4, 'Mango Drinks'),
       (4, 'Pure Juices'),
       (5, 'Noodles'),
       (5, 'Frozen Veg Snacks'),
       (5, 'Frozen Non-Veg Snacks'),
       (5, 'Pasta'),
       (5, 'Instant Mixes'),
       (6, 'Tea'),
       (6, 'Coffee'),
       (6, 'Milk Drinks'),
       (6, 'Green & Flavoured Tea'),
       (6, 'Herbal Drinks'),
       (7, 'Biscuit Gift Pack'),
       (7, 'Bread & Pav'),
       (7, 'Cookies'),
       (7, 'Cream Biscuits'),
       (7, 'Glucose & Marie');

*/

---

-- Insert Subcategory Data with Category ID Lookup
INSERT INTO SUBCATEGORY (CATEGORY_ID, NAME)
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'), 'Fresh Vegetables'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'), 'Fresh Fruits'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'), 'Mangoes & Melons'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'), 'Seasonal'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'), 'Exotics'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'), 'Milk'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'), 'Bread & Pav'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'), 'Eggs'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'), 'Flakes & Kids Cereals'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'), 'Muesli & Granola'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), 'Chips & Crisps'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), 'Rusks & Wafers'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), 'Energy Bars'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), 'Nachos'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), 'Bhujia & Mixtures'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), 'Beverages Gift Packs'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), 'Soft Drinks'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), 'Fruit Juices'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), 'Mango Drinks'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), 'Pure Juices'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), 'Noodles'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), 'Frozen Veg Snacks'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), 'Frozen Non-Veg Snacks'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), 'Pasta'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), 'Instant Mixes'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Tea, Coffee & Health Drinks'), 'Tea'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Tea, Coffee & Health Drinks'), 'Coffee'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Tea, Coffee & Health Drinks'), 'Milk Drinks'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Tea, Coffee & Health Drinks'), 'Green & Flavoured Tea'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Tea, Coffee & Health Drinks'), 'Herbal Drinks'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Bakery & Biscuits'), 'Biscuit Gift Pack'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Bakery & Biscuits'), 'Bread & Pav'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Bakery & Biscuits'), 'Cookies'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Bakery & Biscuits'), 'Cream Biscuits'
UNION ALL
SELECT (SELECT id FROM CATEGORY WHERE NAME = 'Bakery & Biscuits'), 'Glucose & Marie';


------------------ INSERT PRODUCT UNIT DATA ------------------

/*

-- Insert Product Unit Data
INSERT INTO PRODUCT_UNIT_LABEL (LABEL)
VALUES ('Kg'),
       ('Litre'),
       ('Packet'),
       ('Bottle'),
       ('Box'),
       ('Pouch'),
       ('Tin'),
       ('Dozen'),
       ('Piece'),
       ('g'),
       ('ml'),
       ('Cup'),
       ('Slice');
*/


---


INSERT INTO PRODUCT_UNIT_LABEL (LABEL)
VALUES ('g'),
       ('Kg'),
       ('ml'),
       ('Ltr'),
       ('pieces'),
       ('pack'),
       ('bags');


------------------ INSERT PRODUCT DATA ------------------

/*
-- Insert Product Data (IDs 1-50)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Potato', 20.00, 1.00,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Vegetables')),
       ('Tomato', 25.00, 1.00,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Vegetables'))
;*/
/*

SELECT (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
       (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
       (SELECT id
        FROM SUBCATEGORY
        WHERE NAME = 'Fresh Vegetables'
          AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))
UNION ALL;
*/


---

-- Insert Sets of 10 Products

-- Insert Product Data (IDs 1-10)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Onion (Pyaz)', 51, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Fresh Vegetables'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Potato - New Crop', 37, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Fresh Vegetables'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('English Cucumber (Kheera) (500-600) g', 37, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Fresh Vegetables'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Lemon (Nimbu)', 33, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Fresh Vegetables'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Green Capsicum (Shimla Mirch)', 33, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Fresh Vegetables'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Green Peas (Matar)', 33, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Fresh Vegetables'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Cabbage (Patta Gobhi)', 19, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Fresh Vegetables'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Button Mushroom', 54, 200,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Fresh Vegetables'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Garlic (Lehsun)', 100, 250,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Fresh Vegetables'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Lady Finger (Bhindi)', 42, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Fresh Vegetables'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits')));

-- Insert Product Data (IDs 11-20)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Tender Coconut (Nariyal) (275+ ml)', 72, 275,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Fruits')),
       ('Brown Coconut (Nariyal)', 64, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'pieces'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Fruits')),
       ('Papaya (Papita)', 96, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Fruits')),
       ('Guava (Amrud)', 46, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Fruits')),
       ('Kinnow Orange', 42, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Fruits')),
       ('Small Shimla Apple (Seb)', 145, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Fruits')),
       ('Green Grapes 500 g', 150, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Fruits')),
       ('Pomegranate - Medium (500-700) g (Anaar)', 151, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Fruits')),
       ('Shimla Apple Regular', 140, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Fruits')),
       ('Pomegranate - Large', 198, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fresh Fruits'));

-- Insert Product Data (IDs 21-30)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Muskmelon (Kharbuja)', 161, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Mangoes & Melons'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Kiran Watermelon (Tarbuj)', 90, 2,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Mangoes & Melons'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Sun Melon (Sarda)', 154, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Mangoes & Melons'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Broccoli', 108, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Thai Guava', 54, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Green Capsicum (Shimla Mirch)', 33, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Green Peas (Peeled)', 85, 250,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Green Peas (Matar)', 33, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Cabbage (Patta Gobhi)', 19, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Sugarcane Cubes', 42, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits')));

-- Insert Product Data (IDs 31-40)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Guava (Amrud)', 46, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Kinnow Orange', 42, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Small Shimla Apple (Seb)', 145, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Avocado - Tanzania (150-200) g', 110, 150,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Broccoli', 108, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Green Kiwi', 93, 3,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'pieces'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Thai Guava', 54, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Mini Orange', 96, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Red Delicious Apple', 134, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Baby Corn - Packet', 48, 200,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits')));

-- Insert Product Data (IDs 41-50)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Fresh Rosemary', 39, 50,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Pink Lady Apple (300-400) g', 148, 300,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Green Zucchini', 58, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Exotics'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Vegetables & Fruits'))),
       ('Amul Taaza Toned Fresh Milk', 26, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Milk'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Amul Moti Toned Milk (90 Days Shelf Life)', 33, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Milk'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Amul Taaza Homogenised Toned Milk', 74, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Milk'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Amul Taaza Toned Milk', 16, 250,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Milk'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Amul Gold Milk', 80, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Milk'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Amul Lactose Free Milk', 25, 200,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Milk'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Yakult Probiotic Drink (5 x 65) ml', 90, 65,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Milk'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast')));

-- Insert Product Data (IDs 51-60)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Mother Dairy FIT Life Homogenized Double Toned Milk', 33, 450,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Milk'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Nestle a+ Toned Milk', 101, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Milk'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Mother Dairy Toned Milk', 74, 1,
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Milk'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Harvest Gold Hearty Brown Bread', 55, 400,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Bread & Pav'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Harvest Gold Sandwich White Bread', 45, 400,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Bread & Pav'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('English Oven Zero Maida 100% Whole Wheat Bread', 55, 400,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Bread & Pav'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('English Oven Brown Bread', 55, 400,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Bread & Pav'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('English Oven Sandwich White Bread', 45, 400,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Bread & Pav'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('English Oven Zero Maida Multigrain Bread', 70, 400,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Bread & Pav'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('English Oven Milk Bread', 50, 400,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Bread & Pav'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast')));

-- Insert Product Data (IDs 61-70)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Harvest Gold White Bread', 55, 400,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Bread & Pav'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('English Oven Zero Maida Whole Wheat Bread', 60, 400,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Bread & Pav'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Harvest Gold Bunjoy Tutti Frutti Sweet Bun', 20, 6,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'pieces'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Bread & Pav'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Nature Good White Eggs', 57, 6,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'pieces'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Eggs'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('The Natural Fresh White Eggs', 128, 10,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'pieces'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Eggs'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Nature Good White Eggs', 259, 30,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'pieces'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Eggs'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Nature Good Brown Eggs', 85, 6,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'pieces'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Eggs'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('The Natural Fresh White Eggs', 308, 30,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'pieces'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Eggs'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('The Natural Fresh White Eggs', 80, 6,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'pieces'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Eggs'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Eggoz Nutrition Protein Rich Brown Eggs', 161, 10,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'pieces'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Eggs'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast')));

-- Insert Product Data (IDs 71-80)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Kellogg''s Real Almond Honey Corn Flakes', 369, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Flakes & Kids Cereals'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Kellogg''s Multigrain Chocos Variety Pack', 64, 120,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Flakes & Kids Cereals'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Kellogg''s Corn Flakes with Immuno Nutrients', 120, 250,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Flakes & Kids Cereals'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Kellogg''s Corn Flakes Original', 195, 475,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Flakes & Kids Cereals'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Kellogg''s Multigrain Chocos Moons & Stars', 458, 1,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Flakes & Kids Cereals'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Kellogg''s Double Chocolaty Fills Chocos (Crunchy Outside, Creamy Inside)', 192, 250,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Flakes & Kids Cereals'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Kellogg''s Corn Flakes Original', 387, 875,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Flakes & Kids Cereals'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Hide & Seek Fills Cereal', 94, 150,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Flakes & Kids Cereals'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Kellogg''s Real Almond Honey Corn Flakes', 94, 150,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Flakes & Kids Cereals'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Kellogg''s Froot Loops - Crunchy Multigrain Cereal', 195, 285,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Flakes & Kids Cereals'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast')));

-- Insert Product Data (IDs 81-90)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Kellogg''s Muesli Nuts Delight, Breakfast Cereal', 426, 750,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Muesli & Granola'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Kellogg''s Muesli Fruit, Nut & Seeds', 187, 250,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Muesli & Granola'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Kellogg''s Muesli Fruit, Nut & Seeds', 385, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Muesli & Granola'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Yoga Bar Dark Chocolate + Cranberry & Fruit + Nuts & Seeds Muesli', 99, 200,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Muesli & Granola'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Bagrry''s Crunchy Muesli 30% Fruit & Nut with Cranberries', 396, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Muesli & Granola'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('MuscleBlaze High Protein Dark Chocolate & Cranberry Muesli', 273, 400,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Muesli & Granola'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Yoga Bar Fruits + Nuts & Seeds Muesli', 312, 400,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Muesli & Granola'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Yoga Bar Dark Chocolate & Cranberry Muesli', 396, 700,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Muesli & Granola'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('Bagrry''s Crunchy Muesli With Almonds, Raisins & Honey', 410, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Muesli & Granola'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'))),
       ('True Elements Muesli with Real Fruits, Nuts & Seeds', 400, 500,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Muesli & Granola'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Dairy & Breakfast')));

-- Insert Product Data (IDs 91-100)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Cornitos Crusties Korean Chilli Puffs', 45, 60,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Chips & Crisps'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Uncle Chipps Spicy Treat Flavour Potato Chips', 20, 48,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Chips & Crisps'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Kurkure Masala Munch Crisps (3 x 90) g', 54, 90,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Chips & Crisps'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Lay''s India''s Magic Masala Potato Chips', 30, 78,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Chips & Crisps'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Lay''s West Indies Hot n Sweet Chilli Flavour Potato Chips', 20, 52,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Chips & Crisps'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Lay''s American Style Cream & Onion Potato Chips', 30, 78,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Chips & Crisps'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Kurkure Puffcorn Yummy Cheese Puffs (3 x 60) g', 54, 60,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Chips & Crisps'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Lay''s Chile Limon Flavour Potato Chips', 20, 52,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Chips & Crisps'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Lay''s Crispz Herb & Onion Potato Chips', 20, 52,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Chips & Crisps'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Bingo Tedhe Medhe Masala Tadka Crisps (3 x 70) g', 40, 70,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Chips & Crisps'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies')));

-- Insert Product Data (IDs 101-125)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Parle Real Elaichi Premium Rusk', 47, 200, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Rusks & Wafers'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Britannia Toastea Premium Bake Rusk', 47, 250, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Rusks & Wafers'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Parle Premium Real Elaichi Rusk', 147, 600, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Rusks & Wafers'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Britannia Treat Rich Crème Chocolate Flavoured Wafers', 27, 75,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Rusks & Wafers'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('English Oven Extra Crunchy Premium Rusk', 67, 300, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Rusks & Wafers'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Dukes Waffy Chocolate Wafers', 27, 75, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Rusks & Wafers'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Britannia Treat Rich Creme Orange Flavoured Wafers', 27, 75,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Rusks & Wafers'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Dukes Waffy Choco Wafer Roll', 98, 250, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Rusks & Wafers'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Dukes Waffy Orange Wafers', 27, 75, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Rusks & Wafers'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Dukes Waffy Vanilla Wafers', 27, 75, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Rusks & Wafers'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Yoga Bar Daily 10g Protein Bar (6 x 50) g', 301, 50, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Energy Bars'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Yoga Bar Chocolate Chunk Nut Multigrain Protein Bar', 38, 35,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Energy Bars'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Yoga Bar 10g Dark Chocolate & Cranberry Protein Bar', 58, 60,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Energy Bars'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('RiteBite Max Protein Daily Choco Almond Protein Bar (2 x 50) g', 140, 50,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Energy Bars'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Yoga Bar Nuts & Seeds Multigrain Energy Protein Bar', 38, 35,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Energy Bars'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('RiteBite Max Protein Daily Choco Berry Protein Bar (3 x 50) g', 205, 50,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Energy Bars'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Yoga Bar Blueberry Pie Breakfast Protein Bar', 45, 50, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Energy Bars'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('RiteBite Max Protein Daily Protein Bar (Assorted) (6 x 50) g', 388, 50,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Energy Bars'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('RiteBite Max Protein Bar (Peanut Butter)', 119, 70, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Energy Bars'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('RiteBite Choco Delite 4g Protein Bar', 43, 40, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Energy Bars'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Cornitos Tomato Mexicana Nachos Crisps (2 x 150) g', 173, 150,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Nachos'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Doritos Dinamita Sizzling Hot Nachos Crisps', 26, 50, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Nachos'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Cornitos Nachos Crisps & Dip Combo (150 g + 50 g)', 68, 150,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Nachos'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Doritos Cheese Nachos (2 x 100) g', 135, 100, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Nachos'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Cornitos Sweet Chilli Nachos Crisps (2 x 150) g', 173, 150,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'),
        (SELECT id
         FROM SUBCATEGORY
         WHERE NAME = 'Nachos'
           AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies')));

-- Insert Product Data (IDs 126-150)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES ('Cornitos Cheese & Herbs Nachos', 57, 150, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Nachos'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Doritos Sweet Chilli Flavour Nachos (2 x 70) g', 80, 70, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Nachos'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Bingo Mad Angles Pizza Nachos (3 x 65) g', 57, 65, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Nachos'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Cornitos Sea Salt Nachos (2 x 150) g', 173, 150, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Nachos'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Doritos Cheese Nachos', 45, 100, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Nachos'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Bikaji Bhujia', 113, 400, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Bhujia & Mixtures'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Bikaji Mobile Chowpati Bhelpuri', 40, 150, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Bhujia & Mixtures'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Bikano Bikaneri Bhujia', 60, 200, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Bhujia & Mixtures'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Bikaji Kuch Kuch All In One Mixture Namkeen', 60, 200, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Bhujia & Mixtures'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Bikaji Bikaneri Bhujia', 283, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Bhujia & Mixtures'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Bikano Aloo Bhujia', 55, 200, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Bhujia & Mixtures'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Bikaji Tana Tan Aloo Bhujia', 113, 400, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Bhujia & Mixtures'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Bikaji All in One Kuch Kuch Mixture Namkeen', 317, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Bhujia & Mixtures'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Bikano Navratan Mixture Namkeen', 55, 200, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Bhujia & Mixtures'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Let''s Try Namkeen Combo (3 x 100) g', 86, 100, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'), (SELECT id
                                                            FROM SUBCATEGORY
                                                            WHERE NAME = 'Bhujia & Mixtures'
                                                              AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Munchies'))),
       ('Coolberg Non Alcoholic Beer (Assorted) (6 x 330) ml', 547, 330,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id
                                                                        FROM SUBCATEGORY
                                                                        WHERE NAME = 'Beverages Gift Packs'
                                                                          AND CATEGORY_ID =
                                                                              (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
       ('Real Greetings Festive Juice Gift Pack - Free Real Fruit Power 180 ml (4 x 180) ml', 208, 180,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id
                                                                        FROM SUBCATEGORY
                                                                        WHERE NAME = 'Beverages Gift Packs'
                                                                          AND CATEGORY_ID =
                                                                              (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
       ('Real Greetings Beverage Gift Pack - with 2 units of Real Fruit Power 180ml Free (6 x 180) ml', 324, 180,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id
                                                                        FROM SUBCATEGORY
                                                                        WHERE NAME = 'Beverages Gift Packs'
                                                                          AND CATEGORY_ID =
                                                                              (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
       ('Blue Tokai Starter Coffee Gift Pack (3 x 250) g', 999, 250,
        (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id
                                                                        FROM SUBCATEGORY
                                                                        WHERE NAME = 'Beverages Gift Packs'
                                                                          AND CATEGORY_ID =
                                                                              (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
       ('Chaayos Festive Tea Gift Box (3 x 100) g', 549, 100, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id
                                                                        FROM SUBCATEGORY
                                                                        WHERE NAME = 'Beverages Gift Packs'
                                                                          AND CATEGORY_ID =
                                                                              (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
       ('Thums Up Soft Drink', 40, 750, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id
                                                                        FROM SUBCATEGORY
                                                                        WHERE NAME = 'Soft Drinks'
                                                                          AND CATEGORY_ID =
                                                                              (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
       ('Coca-Cola Soft Drink (2 x 750) ml', 79, 750, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id
                                                                        FROM SUBCATEGORY
                                                                        WHERE NAME = 'Soft Drinks'
                                                                          AND CATEGORY_ID =
                                                                              (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
       ('Sprite Lime Flavored Soft Drink', 40, 750, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id
                                                                        FROM SUBCATEGORY
                                                                        WHERE NAME = 'Soft Drinks'
                                                                          AND CATEGORY_ID =
                                                                              (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
       ('7UP Nimbooz with Lemon Juice', 20, 250, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id
                                                                        FROM SUBCATEGORY
                                                                        WHERE NAME = 'Soft Drinks'
                                                                          AND CATEGORY_ID =
                                                                              (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
       ('Coca-Cola Diet Coke Soft Drink', 40, 300, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'),
        (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id
                                                                        FROM SUBCATEGORY
                                                                        WHERE NAME = 'Soft Drinks'
                                                                          AND CATEGORY_ID =
                                                                              (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices')));

-- Insert Product Data (IDs 151-175)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES
    ('Coca-Cola Soft Drink', 96, 1.25, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Soft Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Coca-Cola Zero Sugar Soft Drink Can', 40, 300, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Soft Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Limca Lemon ''N'' Lime Soft Drink', 40, 750, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Soft Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Coca-Cola Soft Drink', 40, 300, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Soft Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('paper boat Zero Lemon Lime Flavoured Sparkling Drink', 59, 300, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Soft Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('paper boat Swing Lush Lychee Juice (2 x 250) ml', 81, 250, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fruit Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Appy Apple Juice', 10, 200, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fruit Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Real Fruit Power Cranberry Juice', 130, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fruit Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Real Fruit Power Mixed Fruit Juice', 120, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fruit Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('paper boat Nata De Coco Lychee Juice', 39, 250, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fruit Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Real Fruit Power Orange Juice', 120, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fruit Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('paper boat Swing Yummy Guava Juice', 42, 250, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fruit Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Real Fruit Power Pineapple Juice', 120, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fruit Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Fresca Litchi Juice', 113, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fruit Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('paper boat Chilli Guava Fruit Juice', 34, 250, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Fruit Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Frooti Mango Drink', 10, 160, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Mango Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Maaza Mango Drink', 40, 600, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Mango Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('paper boat Aamras Mango Drink', 34, 250, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Mango Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Maaza Mango Drink', 73, 1.2, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Mango Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Slice Mango Drink', 93, 1.75, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Mango Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Real Alphonso Nectar Mango Drink', 102, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Mango Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Frooti Mango Drink', 99, 1.8, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Mango Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('paper boat Aam Panna Mango Drink', 34, 250, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Mango Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Raw Pressery Alphonso Mango Drink', 243, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Mango Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('paper boat Aamras/ Mango Drink', 143, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Mango Drinks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices')));

-- Insert Product Data (IDs 176-200)
INSERT INTO PRODUCT (NAME, PRICE, PRODUCT_UNIT_VALUE, PRODUCT_UNIT_LABEL_ID, CATEGORY_ID, SUBCATEGORY_ID)
VALUES
    ('Real Activ Cranberry Juice', 123, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Pure Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Real Activ Apple Juice', 113, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Pure Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Real Activ Orange Juice', 145, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Pure Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Real Activ Fibre+ Multi Fruit Juice', 119, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Pure Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Real Activ Mixed Fruit Juice', 145, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Pure Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Raw Pressery Valencia Orange Juice', 388, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Pure Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Raw Pressery Valencia Orange Juice', 150, 250, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Pure Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Real Activ Pomegranate Juice', 180, 1, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Ltr'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Pure Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Raw Pressery Pomegranate Juice', 150, 250, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Pure Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Raw Pressery Sugarcane Juice', 79, 330, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'ml'), (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Pure Juices' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Cold Drinks & Juices'))),
    ('Maggi Masala - 2 Minutes Instant Noodles', 60, 280, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Noodles' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('Maggi 2 - Minute Instant Noodles (12 x 70) g', 165, 70, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Noodles' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('Maggi Masala 2 Minutes Instant Noodles', 114, 420, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Noodles' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('Maggi Nutri-Licious Masala Veg Atta Instant Noodles', 101, 320, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Noodles' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('Maggi Cuppa Masala Cup Noodles', 45, 70, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Noodles' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('Sunfeast Yippee Magic Masala Instant Noodles', 51, 240, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Noodles' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('Yu 100% Whole Wheat Noodles', 43, 180, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Noodles' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('Maggi Spicy Garlic Instant Noodles', 70, 240, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Noodles' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('Wai Wai Ready To Eat Veg Masala Flavoured Noodles', 86, 200, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Noodles' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('Tops Plain Hakka Noodles', 54, 300, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Noodles' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('McCain French Fries (Frozen)', 103, 420, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Frozen Veg Snacks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('McCain Smiles (Frozen)', 140, 400, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Frozen Veg Snacks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('McCain French Fries (Frozen)', 262, 1.25, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'Kg'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Frozen Veg Snacks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('McCain Aloo Tikki (Frozen)', 94, 400, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Frozen Veg Snacks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'))),
    ('McCain Potato Cheese Nuggets Shotz (Frozen)', 170, 300, (SELECT id FROM PRODUCT_UNIT_LABEL WHERE LABEL = 'g'), (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food'), (SELECT id FROM SUBCATEGORY WHERE NAME = 'Frozen Veg Snacks' AND CATEGORY_ID = (SELECT id FROM CATEGORY WHERE NAME = 'Instant & Frozen Food')));









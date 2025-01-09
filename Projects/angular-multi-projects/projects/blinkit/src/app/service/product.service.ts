import {Injectable} from '@angular/core';
import {Category} from "../shared/model/category.model";
import {Product} from "../shared/model/product.model";
import {CategoryService} from "./category.service";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private categoryList !: Category[];
    private productList!: Product[];

    constructor(private categoryService: CategoryService) {

        this.categoryList = this.categoryService.getCategoryList();
        this.productList = this.generateProductList();

    }

    generateProductList() {

        let productList: Product[] = [];

        for (let category of this.categoryList) {

            let subCategoryList = this.categoryService.getSubCategoryListByCategoryId(category.getId());

            switch (category.getName()) {

                case 'Vegetables & Fruits':

                    subCategoryList.forEach(subCategory => {
                        switch (subCategory.getName()) {

                            case 'Fresh Vegetables':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Tomato', 20));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Potato', 30));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Onion', 40));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Cauliflower', 50));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Cabbage', 60));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Capsicum', 70));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Carrot', 80));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Beetroot', 90));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Radish', 100));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Bitter Gourd', 110));
                                break;

                            case 'Fresh Fruits':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Apple', 20));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Banana', 30));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Orange', 40));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Grapes', 50));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Pomegranate', 60));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Mango', 70));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Guava', 80));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Papaya', 90));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Watermelon', 100));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Muskmelon', 110));
                                break;

                            case 'Mangoes & Melons':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Alphonso Mango', 20));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kesar Mango', 30));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Dasheri Mango', 40));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Langra Mango', 50));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Honeydew Melon', 60));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Cantaloupe Melon', 70));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Watermelon', 80));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Muskmelon', 90));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Pineapple', 100));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kiwi', 110));
                                break;

                            case 'Seasonal':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Strawberry', 20));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Blueberry', 30));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Blackberry', 40));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Raspberry', 50));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Cherry', 60));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Apricot', 70));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Plum', 80));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Peach', 90));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Pear', 100));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Lychee', 110));
                                break;

                            case 'Exotics':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Dragon Fruit', 20));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Passion Fruit', 30));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kiwi', 40));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Pomegranate', 50));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Mango', 60));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Guava', 70));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Papaya', 80));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Watermelon', 90));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Muskmelon', 100));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Pineapple', 110));
                                break;

                        }

                    });
                    break;

                case 'Dairy & Breakfast':

                    subCategoryList.forEach(subCategory => {
                        switch (subCategory.getName()) {

                            case 'Milk':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Saras Toned Fresh Milk', 26));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Taaza Toned Fresh Milk', 52));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Gold Full Cream Fresh Milk', 33));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Saras Gold Full Cream Fresh Milk', 33));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Moti Toned Milk (90 Days Shelf Life)', 33));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Gajar Halwa Combo', 50));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Taaza Toned Milk', 16));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Taaza Homogenised Toned Milk', 74));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Gold Milk', 80));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Lactose Free Milk', 25));
                                break;

                            case 'Bread & Pav':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'The Health Factory Zero Maida Whole Wheat Bread', 58));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Harvest Gold Hearty Brown Bread', 55));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Harvest Gold Sandwich White Bread', 45));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'English Oven Zero Maida 100% Whole Wheat Bread', 55));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'The Health Factory Zero Maida Multigrain Bread', 59));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'English Oven Brown Bread', 55));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'English Oven Sandwich White Bread', 45));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'English Oven Zero Maida Multigrain Bread', 70));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'The Health Factory Zero Maida Bombay Pav', 35));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'English Oven Milk Bread', 50));
                                break;

                            case 'Eggs':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Nature Good White Eggs (6 pieces)', 60));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'The Natural Fresh White Eggs - 10 pieces', 128));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Nature Good White Eggs (30 pieces)', 276));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'The Natural Fresh White Eggs - 30 pieces', 308));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Nature Good Brown Eggs', 79));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'The Natural Fresh White Eggs - 6 pieces', 80));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Eggoz Nutrition Protein Rich Brown Eggs (10 pieces)', 162));
                                break;

                            case 'Paneer & Tofu':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Gowardhan Classic Block Paneer', 94));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Saras Paneer', 77));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Fresh Malai Paneer', 88));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Mother Dairy Paneer', 95));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Now Healthy Tofu (200 g)', 90));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Malai Paneer', 95));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Now Healthy Masala Tofu (150 g)', 99));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Morinaga Silken Extra Firm Tofu', 356));
                                break;

                            case 'Curd & Yogurt':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Saras Curd', 16));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Masti Pouch Curd', 35));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Masti Curd', 23));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Masti Curd', 75));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Mother Dairy Classic Cup Curd', 50));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Mother Dairy Classic Curd', 75));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Mother Dairy Classic Curd', 25));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Amul Masti Cup Curd', 45));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'FruBon Curd', 29));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Mother Dairy Mishti Doi', 20));
                                break;

                            case 'Flakes & Kids Cereals':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Chocos (375 g)', 135));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Chocos (700 g)', 260));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Chocos (1.2 kg)', 420));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Chocos (1.2 kg)', 420));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Chocos (375 g)', 135));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Chocos (700 g)', 260));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Chocos (1.2 kg)', 420));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Chocos (1.2 kg)', 420));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Chocos (375 g)', 135));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Chocos (700 g)', 260));
                                break;

                            case 'Muesli & Granola':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Chocolate Muesli', 330));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Muesli Fruit, Nut & Seeds', 187));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s Muesli Fruit, Nut & Seeds', 385));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Dark Chocolate + Cranberry & Fruit + Nuts & Seeds Muesli', 99));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'MuscleBlaze High Protein Dark Chocolate & Cranberry Muesli', 273));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kellogg\'s with 0% Added Sugar Muesli', 336));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar High Protein Muesli (Choco Almond & Cranberry) with Probiotics', 236));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Fruits + Nuts & Seeds Muesli', 312));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'True Elements Muesli with Real Fruits, Nuts & Seeds', 400));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Dark Chocolate & Cranberry Muesli', 396));
                                break;

                        }

                    });
                    break;

                case 'Munchies':
                    subCategoryList.forEach(subCategory => {
                        switch (subCategory.getName()) {
                            case 'Chips & Crisps':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Uncle Chipps Spicy Treat Flavour Potato Chips', 20));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kurkure Masala Munch Crisps - Pack of 3', 54));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Lay\'s India\'s Magic Masala Potato Chips', 30));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kettle Studio Gourmet Potato Chips Spiced with Tabasco Sauce Flavour', 99));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Lay\'s West Indies Hot n Sweet Chilli Flavour Potato Chips', 20));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Lay\'s American Style Cream & Onion Potato Chips', 30));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Kurkure Puffcorn Yummy Cheese Puffs - Pack of 3', 54));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Lay\'s Chile Limon Flavour Potato Chips', 20));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Lay\'s Crispz Herb & Onion Potato Chips', 20));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Bingo Tedhe Medhe Masala Tadka Crisps - Pack of 3', 40));
                                break;
                            case 'Rusks & Wafers':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Britannia Premium Bake Rusk', 35));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Parle Rusk', 30));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Britannia Toastea Premium Bake Rusk', 40));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Parle Hide & Seek Choco Rolls', 50));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Britannia NutriChoice Digestive High Fibre Rusk', 45));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Parle Hide & Seek Fab! Choco Chip Cookies', 60));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Britannia NutriChoice Digestive Zero Sugar Rusk', 55));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Parle Hide & Seek Bourbon Choco Creme Biscuits', 70));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Britannia NutriChoice Digestive Zero Sugar Biscuits', 65));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Parle Hide & Seek Fab! Vanilla Creme Biscuits', 75));
                                break;
                            case 'Energy Bars':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Multigrain Energy Bar', 30));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Breakfast Protein Bar', 40));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Dark Chocolate Energy Bar', 50));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Almond Protein Bar', 60));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Peanut Butter Energy Bar', 70));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Cranberry Energy Bar', 80));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Blueberry Energy Bar', 90));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Cashew Energy Bar', 100));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Coconut Energy Bar', 110));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Yoga Bar Choco Almond Protein Bar', 120));
                                break;
                            case 'Nachos':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Doritos Nacho Cheese Flavoured Tortilla Chips', 30));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Doritos Cool Ranch Flavoured Tortilla Chips', 40));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Doritos Sweet Chilli Pepper Flavoured Tortilla Chips', 50));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Doritos Spicy Sweet Chili Flavoured Tortilla Chips', 60));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Doritos Salsa Verde Flavoured Tortilla Chips', 70));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Doritos Flamin Hot Nacho Flavoured Tortilla Chips', 80));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Doritos Flamin Hot Limon Flavoured Tortilla Chips', 90));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Doritos Flamin Hot Flavoured Tortilla Chips', 100));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Doritos Flamin Hot Nacho Flavoured Tortilla Chips', 110));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Doritos Flamin Hot Limon Flavoured Tortilla Chips', 120));
                                break;
                            case 'Bhujia & Mixtures':
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Haldiram\'s Aloo Bhujia', 30));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Haldiram\'s Bhujia Sev', 40));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Haldiram\'s Bhujia', 50));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Haldiram\'s Moong Dal', 60));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Haldiram\'s Navratan Mix', 70));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Haldiram\'s Khatta Meetha Mix', 80));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Haldiram\'s Diet Mixture', 90));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Haldiram\'s Nut Cracker', 100));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Haldiram\'s Bhelpuri', 110));
                                productList.push(new Product(category.getId(), subCategory.getId(), 'Haldiram\'s Bhel Puri', 120));
                                break;
                        }

                    });

                //  ...
            }

        }

        return productList;

    }

    public getProductListByCategoryId(categoryId: number): Product[] {
        return this.productList.filter(product => product.getCategoryId() === categoryId);
    }

    public getProductListByCategoryIdAndSubCategoryId(categoryId: number, subCategoryId: number): Product[] {
        return this.productList.filter(product => product.getCategoryId() === categoryId && product.getSubCategoryId() === subCategoryId);
    }

    //  Getters
    //  -------

    public getCategoryList(): Category[] {
        return this.categoryList;
    }

    getProductList() {
        return this.productList;
    }
}

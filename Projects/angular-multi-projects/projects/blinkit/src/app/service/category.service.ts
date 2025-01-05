import {Injectable} from '@angular/core';
import {Category} from "../shared/model/category.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private categoryList !: Category[];
    private subCategoryList !: Category[];

    constructor() {

        this.initCategoryList();
        this.initSubCategoryList();

    }

    initCategoryList() {
        this.categoryList = [
            new Category(1, 'Dairy, Bread & Eggs'),
            new Category(2, 'Fruits & Vegetables'),
            new Category(4, 'Cold Drinks & Juices'),
            new Category(6, 'Breakfast & Instant Food'),
            new Category(7, 'Sweet Tooth'),
            new Category(8, 'Bakery & Biscuits'),
            new Category(9, 'Tea, Coffee & Health Drink'),
            new Category(11, 'Masala, Oil & More'),
            new Category(12, 'Sauces & Spreads'),
            new Category(13, 'Chicken, Meat & Fish'),
            new Category(14, 'Organic & Healthy Living'),
            new Category(15, 'Baby Care'),
            new Category(16, 'Pharma & Wellness'),
            new Category(17, 'Clening Essentials'),
            new Category(18, 'Home & Office'),
            new Category(19, 'Personal Care'),
            new Category(20, 'Pet Care')
        ];
    }

    initSubCategoryList() {
        this.subCategoryList = [
            new Category(1, 'Milk'),
            new Category(2, 'Bread & Pav'),
            new Category(3, 'Eggs'),
            new Category(4, 'Flakes & Kids Cereals'),
            new Category(5, 'Muesli & Granola')
        ];
    }

    //  Getters
    //  -------

    getCategoryList(): Category[] {
        return this.categoryList;
    }

    getSubCategoryList(): Category[] {
        return this.subCategoryList;
    }

}

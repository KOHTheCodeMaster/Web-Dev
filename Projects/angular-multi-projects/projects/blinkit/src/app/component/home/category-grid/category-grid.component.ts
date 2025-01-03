import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-category-grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './category-grid.component.html',
  styleUrl: './category-grid.component.css'
})
export class CategoryGridComponent {

    categoryList!: Category[];

    constructor() {
        this.initCategoryList();
    }

    initCategoryList() {
        this.categoryList = [
            new Category(1, 'Electronics'),
            new Category(2, 'Fashion'),
            new Category(3, 'Home & Kitchen'),
            new Category(4, 'Beauty & Health'),
            new Category(5, 'Sports & Outdoors'),
            new Category(6, 'Books'),
            new Category(7, 'Toys & Games'),
            new Category(8, 'Automotive'),
            new Category(9, 'Grocery & Gourmet'),
            new Category(10, 'Pet Supplies'),
            new Category(11, 'Baby Products'),
            new Category(12, 'Industrial & Scientific'),
            new Category(13, 'Handmade'),
            new Category(14, 'Digital Music'),
            new Category(15, 'Kindle Store'),
            new Category(16, 'Prime Video'),
            new Category(17, 'Software'),
            new Category(18, 'Video Games'),
            new Category(19, 'Gift Cards'),
            new Category(20, 'Home Improvement')
        ];
    }

    handleCategoryItemClick(categoryId: number) {
        console.log('Category Id: ' + categoryId);
    }

}

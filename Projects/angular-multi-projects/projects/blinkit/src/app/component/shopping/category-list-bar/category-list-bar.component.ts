import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {CategoryService} from "../../../service/category.service";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-category-list-bar',
    standalone: true,
    imports: [
        NgForOf
    ],
    templateUrl: './category-list-bar.component.html',
    styleUrl: './category-list-bar.component.css'
})
export class CategoryListBarComponent {
    visibleCategoryList: Category[] = [];
    hiddenCategoryList: Category[] = [];

    constructor(private categoryService: CategoryService) {
        this.initCategoryLists();
    }

    initCategoryLists() {
        const maxVisible = 5; // Number of categories to show inline
        let categoryList: Category[] = this.categoryService.getCategoryList();

        this.visibleCategoryList = categoryList.slice(0, maxVisible);
        this.hiddenCategoryList = categoryList.slice(maxVisible);
    }

    onCategoryBtnClick(category: Category) {
        console.log('Category ID: ', category.getId());
    }

}

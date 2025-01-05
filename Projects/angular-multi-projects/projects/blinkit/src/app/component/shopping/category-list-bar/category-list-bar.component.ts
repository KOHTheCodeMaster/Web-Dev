import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {CategoryService} from "../../../service/category.service";
import {NgClass, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-category-list-bar',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgClass
    ],
    templateUrl: './category-list-bar.component.html',
    styleUrl: './category-list-bar.component.css'
})
export class CategoryListBarComponent {

    categoryId!: number;
    visibleCategoryList: Category[] = [];
    hiddenCategoryList: Category[] = [];

    constructor(private categoryService: CategoryService) {
        this.initCategoryLists();
        this.categoryService.getCategoryId$().subscribe(categoryId => this.categoryId = categoryId);
    }

    initCategoryLists() {
        const maxVisible = 5; // Number of categories to show inline
        let categoryList: Category[] = this.categoryService.getCategoryList();

        this.visibleCategoryList = categoryList.slice(0, maxVisible);
        this.hiddenCategoryList = categoryList.slice(maxVisible);
    }

    onCategoryBtnClick(category: Category) {

        this.categoryService.updateCategoryId(category.getId());

    }

}

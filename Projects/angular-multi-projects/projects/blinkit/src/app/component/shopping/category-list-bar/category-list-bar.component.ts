import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {CategoryService} from "../../../service/category.service";
import {NgClass, NgForOf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";

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
    maxVisibleCategoryCount!: number;

    constructor(private categoryService: CategoryService,
                private activatedRoute: ActivatedRoute) {

        this.maxVisibleCategoryCount = 5;   // Number of categories to show inline
        this.initCategoryLists();

        this.categoryService.getCategoryId$().subscribe(categoryId => this.categoryId = categoryId);

        this.activatedRoute.queryParams.subscribe(params => {
            if (params['categoryId']) {
                let currentCategoryId: number = parseInt(params['categoryId']);
                this.categoryService.updateCategoryId(currentCategoryId);
            } else {
                console.log('No Category Id');
            }
        });

    }

    initCategoryLists() {
        let categoryList: Category[] = this.categoryService.getCategoryList();

        this.visibleCategoryList = categoryList.slice(0, this.maxVisibleCategoryCount);
        this.hiddenCategoryList = categoryList.slice(this.maxVisibleCategoryCount);
    }

    onCategoryBtnClick(category: Category) {
        this.categoryService.updateCategoryId(category.getId());
    }

}

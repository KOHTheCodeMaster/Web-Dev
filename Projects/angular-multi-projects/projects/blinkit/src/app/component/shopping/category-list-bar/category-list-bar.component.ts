import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {CategoryService} from "../../../service/category.service";
import {NgClass, NgForOf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {DataLoaderService} from "../../../service/data-loader.service";

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
    visibleCategoryList!: Category[];
    // hiddenCategoryList!: Category[];
    maxVisibleCategoryCount!: number;

    constructor(private categoryService: CategoryService,
                private dataLoaderService: DataLoaderService,
                private activatedRoute: ActivatedRoute) {

        this.initDataMembers();

        this.initSubscriptions();

    }

    private initDataMembers() {
        this.maxVisibleCategoryCount = 7;   // Number of categories to show inline
        this.visibleCategoryList = [];
        // this.hiddenCategoryList = [];
    }

    private initSubscriptions() {

        //  Update category lists when data is loaded
        this.dataLoaderService.getDataLoaded$().subscribe(dataLoaded => dataLoaded ? this.initCategoryLists() : null);

        //  Update category id when it changes
        this.categoryService.getCategoryId$().subscribe(categoryId => this.categoryId = categoryId);

        //  Update category id when query parameter changes
        this.activatedRoute.queryParams.subscribe(params => {
            if (params['categoryId']) this.categoryService.updateCategoryId(parseInt(params['categoryId']));
            else console.log('No Category Id');
        });

    }

    initCategoryLists() {
        let categoryList: Category[] = this.categoryService.getCategoryList();

        this.visibleCategoryList = categoryList;
        // this.visibleCategoryList = categoryList.slice(0, this.maxVisibleCategoryCount);
        // this.hiddenCategoryList = categoryList.slice(this.maxVisibleCategoryCount);
    }

    onCategoryBtnClick(category: Category) {
        this.categoryService.updateCategoryId(category.getId());
    }

}

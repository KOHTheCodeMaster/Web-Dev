import {Component} from '@angular/core';
import {Category} from "../../shared/model/category.model";
import {CategoryService} from "../../service/category.service";
import {NgForOf} from "@angular/common";
import {DataLoaderService} from "../../service/data-loader.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-useful-links-and-categories',
    standalone: true,
    imports: [
        NgForOf
    ],
    templateUrl: './useful-links-and-categories.component.html',
    styleUrl: './useful-links-and-categories.component.css'
})
export class UsefulLinksAndCategoriesComponent {

    categoryList: Category[] = [];

    constructor(private router: Router,
                private dataLoaderService: DataLoaderService,
                private categoryService: CategoryService) {

        this.initSubscriptions();
    }

    private initSubscriptions() {

        this.dataLoaderService.getDataLoaded$().subscribe(dataLoaded => {
            if (dataLoaded) this.loadCategories();
        });

    }

    private loadCategories() {
        this.categoryList = this.categoryService.getCategoryList();
    }

    navigateToCategory(categoryId: number) {
        this.router.navigate(['/shopping'], {queryParams: {categoryId: categoryId}});
    }

}

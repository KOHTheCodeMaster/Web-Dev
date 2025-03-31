import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {NgFor} from "@angular/common";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";
import {DataLoaderService} from "../../../service/data-loader.service";

@Component({
    selector: 'app-category-grid',
    standalone: true,
    imports: [NgFor],
    templateUrl: './category-grid.component.html',
    styleUrl: './category-grid.component.css'
})
export class CategoryGridComponent {

    categoryList!: Category[];

    constructor(private categoryService: CategoryService,
                private dataLoaderService: DataLoaderService,
                private router: Router) {

        this.categoryList = [];

        this.initSubscriptions();

    }

    private initSubscriptions() {

        this.dataLoaderService.getDataLoaded$().subscribe(dataLoaded => {
            if (dataLoaded) this.categoryList = this.categoryService.getCategoryList();
        });

    }

    handleCategoryItemClick(categoryId: number) {
        console.log('Category Id: ' + categoryId);
        this.router.navigate(['/shopping'], {queryParams: {categoryId: categoryId}});
        this.categoryService.updateCategoryId(categoryId);
    }

}

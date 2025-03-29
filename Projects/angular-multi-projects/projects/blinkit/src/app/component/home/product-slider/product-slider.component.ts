import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {ProductService} from "../../../service/product.service";
import {NgForOf} from "@angular/common";
import {CategoryService} from "../../../service/category.service";
import {DataLoaderService} from "../../../service/data-loader.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-product-slider',
    standalone: true,
    imports: [
        NgForOf
    ],
    templateUrl: './product-slider.component.html',
    styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent {

    categoryList: Category[] = [];

    constructor(public dataLoaderService: DataLoaderService,
                public categoryService: CategoryService,
                public productService: ProductService,
                private router: Router) {

        this.initSubscriptions();

    }

    private initSubscriptions() {

        this.dataLoaderService.getDataLoaded$().subscribe((dataLoaded: boolean) => {
            if (dataLoaded) this.categoryList = this.categoryService.getCategoryList();
        });

    }

    navigateToShoppingByCategory(categoryId: number) {
        this.router.navigate(['/shopping'], {queryParams: {categoryId: categoryId}});
        this.categoryService.updateCategoryId(categoryId);
    }

}

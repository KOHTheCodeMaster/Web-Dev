import {Component} from '@angular/core';
import {Product} from "../../../shared/model/product.model";
import {ProductService} from "../../../service/product.service";
import {CategoryService} from "../../../service/category.service";
import {NgFor} from "@angular/common";

@Component({
    selector: 'app-product-grid',
    standalone: true,
    imports: [NgFor],
    templateUrl: './product-grid.component.html',
    styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {

    categoryId!: number;
    subCategoryId!: number;
    allProductsList!: Product[];
    filteredProductsList!: Product[];

    constructor(private productService: ProductService,
                private categoryService: CategoryService) {

        this.initializeProductsList();
        this.initializeSubscriptions();

    }

    private initializeProductsList() {
        this.allProductsList = this.productService.getProductList();
        this.filteredProductsList = this.allProductsList;
    }

    private initializeSubscriptions() {

        this.categoryService.getCategoryId$().subscribe(categoryId => {
            this.categoryId = categoryId;
            this.filterProducts();
        });

        this.categoryService.getSubCategoryId$().subscribe(subCategoryId => {
            this.subCategoryId = subCategoryId;
            this.filterProducts();
        });

    }

    private filterProducts() {

        if (this.categoryId === 0 && this.subCategoryId === 0) {

            this.filteredProductsList = this.allProductsList;

        } else if (this.categoryId !== 0 && this.subCategoryId === 0) {

            this.filteredProductsList = this.allProductsList.filter(product => product.getCategoryId() === this.categoryId);

        } else {

            this.filteredProductsList = this.allProductsList.filter(product => product.getCategoryId() === this.categoryId && product.getSubCategoryId() === this.subCategoryId);

        }

    }

}

import {Component} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {CategoryService} from "../../../service/category.service";
import {NgFor} from "@angular/common";
import {ProductCardComponent} from "./product-card/product-card.component";
import {Product} from "../../../shared/model/product.model";

@Component({
    selector: 'app-product-grid',
    standalone: true,
    imports: [NgFor, ProductCardComponent],
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
        this.allProductsList = this.productService.getAllProductList();
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

            //  If "All" category and sub category are selected
            this.filteredProductsList = this.allProductsList;

        } else if (this.categoryId !== 0 && this.subCategoryId === 0) {

            //  If a specific category is selected and "All" sub category is selected
            this.filteredProductsList = this.allProductsList.filter(product => product.getCategoryId() === this.categoryId);

        } else {

            //  If a specific category and specific sub category are selected
            this.filteredProductsList = this.allProductsList.filter(product => product.getCategoryId() === this.categoryId && product.getSubCategoryId() === this.subCategoryId);

        }

    }

}

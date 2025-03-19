import {Component} from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {CategoryService} from "../../../service/category.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms';
import {ProductCardComponent} from "./product-card/product-card.component";
import {Product} from "../../../shared/model/product.model";

@Component({
    selector: 'app-product-grid',
    standalone: true,
    imports: [CommonModule, FormsModule, ProductCardComponent],
    templateUrl: './product-grid.component.html',
    styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {

    categoryId: number = 0;
    subCategoryId: number = 0;
    allProductsList: Product[] = [];
    baseFilteredProductsList: Product[] = [];
    filteredProductsList: Product[] = [];
    sortBy: string = 'featured';

    constructor(private productService: ProductService,
                private categoryService: CategoryService) {
        this.initializeProductsList();
        this.initializeSubscriptions();
    }

    private initializeProductsList() {
        this.allProductsList = this.productService.getAllProductList();
        this.filterProducts(); // Initialize with default filters and sort
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
            this.baseFilteredProductsList = [...this.allProductsList];
        } else if (this.categoryId !== 0 && this.subCategoryId === 0) {
            this.baseFilteredProductsList = this.allProductsList.filter(product =>
                product.getCategoryId() === this.categoryId);
        } else {
            this.baseFilteredProductsList = this.allProductsList.filter(product =>
                product.getCategoryId() === this.categoryId && product.getSubCategoryId() === this.subCategoryId);
        }

        this.applySort();

    }

    private applySort() {

        if (this.sortBy === 'featured') {
            this.filteredProductsList = [...this.baseFilteredProductsList];
        } else if (this.sortBy === 'price-asc') {
            this.filteredProductsList = [...this.baseFilteredProductsList]
                .sort((a, b) => a.getPrice() - b.getPrice());
        } else if (this.sortBy === 'price-desc') {
            this.filteredProductsList = [...this.baseFilteredProductsList]
                .sort((a, b) => b.getPrice() - a.getPrice());
        } else if (this.sortBy === 'name-asc') {
            this.filteredProductsList = [...this.baseFilteredProductsList]
                .sort((a, b) => a.getName().localeCompare(b.getName(), undefined, {sensitivity: 'base'}));
        }

    }

    onSortChange() {
        this.applySort();
    }

}

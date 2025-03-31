import {Component} from '@angular/core';
import {CategoryListBarComponent} from "./category-list-bar/category-list-bar.component";
import {SubCategorySidebarComponent} from "./sub-category-sidebar/sub-category-sidebar.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductGridComponent} from "./product-grid/product-grid.component";
import {FooterComponent} from "../footer/footer.component";
import {UsefulLinksAndCategoriesComponent} from "../useful-links-and-categories/useful-links-and-categories.component";
import {CategoryService} from '../../service/category.service';
import {ProductService} from "../../service/product.service";
import {Product} from "../../shared/model/product.model";
import {SubCategory} from "../../shared/model/sub-category.model";
import {NgFor} from "@angular/common";

@Component({
    selector: 'app-shopping',
    standalone: true,
    imports: [
        CategoryListBarComponent,
        SubCategorySidebarComponent,
        ProductGridComponent,
        FooterComponent,
        UsefulLinksAndCategoriesComponent,
        NgFor
    ],
    templateUrl: './shopping.component.html',
    styleUrl: './shopping.component.css'
})
export class ShoppingComponent {

    categoryId!: number;
    subCategory!: SubCategory;
    top10ProductList!: Product[];

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private categoryService: CategoryService,
                private productService: ProductService) {

        this.initializeQueryParams();
        this.initSubscriptions();

    }

    initializeQueryParams() {

        this.categoryId = this.activatedRoute.snapshot.queryParams['categoryId'];

        //  If no category id is provided, redirect to the 1st category as default
        if (!this.categoryId) {
            this.router.navigate(['/shopping'], {queryParams: {categoryId: 1}});
            return;
        }

    }

    private initSubscriptions() {

        this.categoryService.getCategoryId$().subscribe(categoryId => {
            if (categoryId) {
                this.subCategory = this.categoryService.getSubCategoryListByCategoryId(categoryId)[0];
                this.top10ProductList = this.productService.getProductListBySubCategoryId(this.subCategory.getId());
            }
        });

        this.categoryService.getSubCategoryId$().subscribe(subCategoryId => {
            if (subCategoryId === 0) return;
            this.subCategory = this.categoryService.getSubCategoryById(subCategoryId);
            this.top10ProductList = this.productService.getProductListBySubCategoryId(subCategoryId);
        });

    }

}

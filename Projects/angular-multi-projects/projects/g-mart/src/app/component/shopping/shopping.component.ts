import {Component} from '@angular/core';
import {CategoryListBarComponent} from "./category-list-bar/category-list-bar.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductGridComponent} from "./product-grid/product-grid.component";
import {FooterComponent} from "../footer/footer.component";
import {UsefulLinksAndCategoriesComponent} from "../useful-links-and-categories/useful-links-and-categories.component";
import {CategoryService} from '../../service/category.service';
import {ProductService} from "../../service/product.service";
import {Product} from "../../shared/model/product.model";
import {NgFor} from "@angular/common";
import {Subcategory} from "../../shared/model/subcategory.model";
import {SubcategorySidebarComponent} from "./sub-category-sidebar/sub-category-sidebar.component";

@Component({
    selector: 'app-shopping',
    standalone: true,
    imports: [
        CategoryListBarComponent,
        SubcategorySidebarComponent,
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
    subcategory!: Subcategory;
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
                this.subcategory = this.categoryService.getSubcategoryListByCategoryId(categoryId)[0];
                this.top10ProductList = this.productService.getProductListBySubcategoryId(this.subcategory.getId());
            }
        });

        this.categoryService.getSubcategoryId$().subscribe(subCategoryId => {
            if (subCategoryId === 0) return;
            this.subcategory = this.categoryService.getSubcategoryById(subCategoryId);
            this.top10ProductList = this.productService.getProductListBySubcategoryId(subCategoryId);
        });

    }

}

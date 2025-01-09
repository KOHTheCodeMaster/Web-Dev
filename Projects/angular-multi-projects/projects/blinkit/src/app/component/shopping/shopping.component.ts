import {Component} from '@angular/core';
import {CategoryListBarComponent} from "./category-list-bar/category-list-bar.component";
import {SubCategorySidebarComponent} from "./sub-category-sidebar/sub-category-sidebar.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductGridComponent} from "./product-grid/product-grid.component";

@Component({
    selector: 'app-shopping',
    standalone: true,
    imports: [
        CategoryListBarComponent,
        SubCategorySidebarComponent,
        ProductGridComponent
    ],
    templateUrl: './shopping.component.html',
    styleUrl: './shopping.component.css'
})
export class ShoppingComponent {

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.initializeQueryParams();
    }

    initializeQueryParams() {
        //  Redirect to the first category if no category is selected
        if (!this.activatedRoute.snapshot.queryParams['categoryId'])
            this.router.navigate(['/shopping'], {queryParams: {categoryId: 1}});
    }

}

import {Component} from '@angular/core';
import {CategoryListBarComponent} from "./category-list-bar/category-list-bar.component";
import {SubCategorySidebarComponent} from "./sub-category-sidebar/sub-category-sidebar.component";

@Component({
    selector: 'app-shopping',
    standalone: true,
    imports: [
        CategoryListBarComponent,
        SubCategorySidebarComponent
    ],
    templateUrl: './shopping.component.html',
    styleUrl: './shopping.component.css'
})
export class ShoppingComponent {

    constructor() {

    }

}

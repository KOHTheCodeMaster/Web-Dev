import {Component} from '@angular/core';
import {Category} from "../../shared/model/category.model";
import {Router, RouterLink} from "@angular/router";

@Component({
    selector: 'app-orders',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './orders.component.html'
})
export class OrdersComponent {

    categoryList: Category[] = [];

    constructor(private router: Router) {

    }

}

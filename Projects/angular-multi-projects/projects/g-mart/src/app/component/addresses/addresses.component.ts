import {Component} from '@angular/core';
import {Category} from "../../shared/model/category.model";
import {Router, RouterLink} from "@angular/router";

@Component({
    selector: 'app-addresses',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './addresses.component.html'
})
export class AddressesComponent {

    categoryList: Category[] = [];

    constructor(private router: Router) {

    }

}

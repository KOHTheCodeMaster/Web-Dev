import {Component} from '@angular/core';
import {Product} from "../../../shared/model/product.model";

@Component({
    selector: 'app-product-grid',
    standalone: true,
    imports: [],
    templateUrl: './product-grid.component.html',
    styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {

    allProductsList: Product[];
    filteredProductsList: Product[];

    constructor(/*private productService: ProductService,
                private categoryService: CategoryService,
                activatedRoute: ActivatedRoute*/) {

        this.filteredProductsList = this.allProductsList = [];

    }

}

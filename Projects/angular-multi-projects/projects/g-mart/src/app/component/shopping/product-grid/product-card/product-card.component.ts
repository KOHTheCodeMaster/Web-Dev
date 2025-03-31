import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgIf} from "@angular/common";
import {Product} from "../../../../shared/model/product.model";

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [CurrencyPipe, NgIf],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

    @Input({required: true}) product!: Product;

    constructor() {
    }

    incrementQuantity() {
        this.product.incrementQuantity();
    }

    decrementQuantity() {
        this.product.decrementQuantity();
    }

}

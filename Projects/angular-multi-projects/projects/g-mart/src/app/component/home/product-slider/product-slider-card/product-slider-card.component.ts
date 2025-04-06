import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgIf} from "@angular/common";
import {Product} from "../../../../shared/model/product.model";

@Component({
    selector: 'app-product-slider-card',
    standalone: true,
    imports: [CurrencyPipe, NgIf],
    templateUrl: './product-slider-card.component.html',
})
export class ProductSliderCardComponent {

    @Input({required: true}) product!: Product;

    constructor() {
    }

    incrementQuantity() {
        // this.product.incrementQuantity();
    }

    decrementQuantity() {
        // this.product.decrementQuantity();
    }

}

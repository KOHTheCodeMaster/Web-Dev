import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {ProductService} from "../../../service/product.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-product-slider',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent {

    categoryList: Category[];

    constructor(public productSliderService: ProductService) {
        this.categoryList = this.productSliderService.getCategoryList();
    }

}

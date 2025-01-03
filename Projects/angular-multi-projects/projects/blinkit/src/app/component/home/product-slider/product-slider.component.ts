import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {ProductSliderService} from "../../../service/product-slider.service";
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

    constructor(public productSliderService: ProductSliderService) {
        this.categoryList = this.productSliderService.getCategoryList();
    }

}

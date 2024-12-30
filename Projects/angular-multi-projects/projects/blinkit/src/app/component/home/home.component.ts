import {Component} from '@angular/core';
import {PosterComponent} from "./poster/poster.component";
import {CategoryGridComponent} from "./category-grid/category-grid.component";
import {FooterComponent} from "../footer/footer.component";
import {ProductSliderComponent} from "./product-slider/product-slider.component";
import {UsefulLinksAndCategoriesComponent} from "../useful-links-and-categories/useful-links-and-categories.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        PosterComponent,
        CategoryGridComponent,
        FooterComponent,
        ProductSliderComponent,
        UsefulLinksAndCategoriesComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {


}

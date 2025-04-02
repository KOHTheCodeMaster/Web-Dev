import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {ProductService} from "../../../service/product.service";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {CategoryService} from "../../../service/category.service";
import {DataLoaderService} from "../../../service/data-loader.service";
import {Router} from "@angular/router";
import {ProductSliderCardComponent} from "./product-slider-card/product-slider-card.component";

@Component({
    selector: 'app-product-slider',
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        NgClass,
        ProductSliderCardComponent
    ],
    templateUrl: './product-slider.component.html',
    styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent {

    categoryList: Category[] = [];
    sliderStates: Map<number, {
        canScrollLeft: boolean,
        canScrollRight: boolean,
        currentPage: number,
        totalPages: number,
        itemsPerPage: number
    }> = new Map();

    constructor(public dataLoaderService: DataLoaderService,
                public categoryService: CategoryService,
                public productService: ProductService,
                private router: Router) {

        this.initSubscriptions();

        // Update slider states on window resize
        window.addEventListener('resize', () => this.initializeSliderStates());
    }

    private initSubscriptions() {
        this.dataLoaderService.getDataLoaded$().subscribe((dataLoaded: boolean) => {
            if (dataLoaded) {
                // Initialize category list
                this.categoryList = this.categoryService.getCategoryList();

                // Initialize slider states after categories are loaded
                setTimeout(() => this.initializeSliderStates());
            }
        });
    }

    navigateToShoppingByCategory(categoryId: number) {
        this.router.navigate(['/shopping'], {queryParams: {categoryId: categoryId}});
        this.categoryService.updateCategoryId(categoryId);
    }

    private initializeSliderStates() {
        this.categoryList.forEach(category => {
            const categoryId = category.getId();
            const slider = document.getElementById(`slider-${categoryId}`);

            if (slider) {
                const containerWidth = slider.clientWidth;
                const itemWidth = this.getFixedItemWidth();  // Width of each product card + gap
                const itemsPerPage = Math.floor(containerWidth / itemWidth);
                const productCount = this.productService.getProductListByCategoryId(categoryId).length;
                const totalPages = Math.ceil(productCount / itemsPerPage);

                this.sliderStates.set(categoryId, {
                    canScrollLeft: false,
                    canScrollRight: totalPages > 1,
                    currentPage: 0,
                    totalPages: totalPages,
                    itemsPerPage: itemsPerPage
                });
            }
        });
    }

    private getFixedItemWidth(): number {
        // Get width of a product card (default 208px = w-52 = 13rem = 208px)
        // Plus gap-6 (1.5rem = 24px)
        return 232; // 208px + 24px = 232px
    }

    shouldShowLeftButton(categoryId: number): boolean {
        return this.sliderStates.get(categoryId)?.canScrollLeft || false;
    }

    shouldShowRightButton(categoryId: number): boolean {
        return this.sliderStates.get(categoryId)?.canScrollRight || false;
    }

    scrollLeft(categoryId: number) {
        const state = this.sliderStates.get(categoryId);
        if (!state) return;

        const slider = document.getElementById(`slider-${categoryId}`);
        if (slider && state.currentPage > 0) {
            // Go to previous page
            state.currentPage--;

            // Calculate exact scroll position for this page
            const itemWidth = this.getFixedItemWidth();
            const scrollPosition = state.currentPage * state.itemsPerPage * itemWidth;

            // Scroll to exact position
            slider.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });

            // Update navigation buttons
            state.canScrollRight = true;
            state.canScrollLeft = state.currentPage > 0;
            this.sliderStates.set(categoryId, state);
        }
    }

    scrollRight(categoryId: number) {
        const state = this.sliderStates.get(categoryId);
        if (!state) return;

        const slider = document.getElementById(`slider-${categoryId}`);
        if (slider && state.currentPage < state.totalPages - 1) {
            // Go to next page
            state.currentPage++;

            // Calculate exact scroll position for this page
            const itemWidth = this.getFixedItemWidth();
            const scrollPosition = state.currentPage * state.itemsPerPage * itemWidth;

            // Scroll to exact position
            slider.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });

            // Update navigation buttons
            state.canScrollLeft = true;
            state.canScrollRight = state.currentPage < state.totalPages - 1;
            this.sliderStates.set(categoryId, state);
        }
    }

}

import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-demo-commands-array',
    standalone: true,
    imports: [],
    templateUrl: './demo-commands-array.component.html',
})
export class DemoCommandsArrayComponent {

    explanations: { [key: string]: string } = {
        product: 'Navigates to a product in the category. URL: /category/fruits/product/1',
        productReview: 'Navigates to the product review. URL: /category/fruits/product/1/review/101',
        relatedProducts: 'Navigates to related products within a product. URL: /category/vegetables/product/2/related/202',
        productComment: 'Navigates to product reviews and comments. URL: /category/dairy/product/3/review/102/comment/5'
    };

    constructor(private router: Router) {
    }

    showExplanation(str: string) {
        const explanationElement = document.getElementById('explanation');
        if (explanationElement) explanationElement.innerText = this.explanations[str];
    }

    navigateToProduct(categoryId: string, productId: string) {
        this.router.navigate(['category', categoryId, 'product', productId]);
    }

    navigateToProductReview(categoryId: string, productId: string, reviewId: string) {
        this.router.navigate(['category', categoryId, 'product', productId, 'review', reviewId]);
    }

    navigateToRelatedProducts(categoryId: string, productId: string, relatedProductId: string) {
        this.router.navigate(['category', categoryId, 'product', productId, 'related', relatedProductId]);
    }

    navigateToProductComment(categoryId: string, productId: string, reviewId: string, commentId: string) {
        this.router.navigate(['category', categoryId, 'product', productId, 'review', reviewId, 'comment', commentId]);
    }

}

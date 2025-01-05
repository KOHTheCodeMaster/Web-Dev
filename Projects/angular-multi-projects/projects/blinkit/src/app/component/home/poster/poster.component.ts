import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";

@Component({
    selector: 'app-poster',
    standalone: true,
    imports: [],
    templateUrl: './poster.component.html',
    styleUrl: './poster.component.css'
})
export class PosterComponent {

    constructor(private router: Router,
                private categoryService: CategoryService) {

    }

    handlePosterClick(posterId: number) {
        const categoryId = posterId;
        this.router.navigate(['/shopping'], {queryParams: {categoryId: categoryId}});
        this.categoryService.updateCategoryId(categoryId);
    }

}

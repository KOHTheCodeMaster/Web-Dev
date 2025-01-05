import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {CategoryService} from "../../../service/category.service";
import {NgClass, NgForOf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
    selector: 'app-sub-category-sidebar',
    standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        NgClass
    ],
    templateUrl: './sub-category-sidebar.component.html',
    styleUrl: './sub-category-sidebar.component.css'
})
export class SubCategorySidebarComponent {

    subCategoryId!: number;
    subCategoryList!: Category[];

    constructor(private categoryService: CategoryService,
                private route: ActivatedRoute) {

        this.route.queryParams.subscribe(params => {
            if (params['categoryId']) {
                let currentCategoryId: number = params['categoryId'];
                this.subCategoryList = categoryService.getSubCategoryList(currentCategoryId);
            }
        });

        this.categoryService.getSubCategoryId$().subscribe(subCategoryId => this.subCategoryId = subCategoryId);

        // console.log('Sub Category List: ', this.subCategoryList);

        // this.initializeQueryParams();

    }

    /*
        initializeQueryParams() {
            //  If there is no subCategoryId in the query params, set the first sub-category as the default

        }
    */

    setSubCategoryId(id: number) {
        this.categoryService.updateSubCategoryId(id);
    }
}

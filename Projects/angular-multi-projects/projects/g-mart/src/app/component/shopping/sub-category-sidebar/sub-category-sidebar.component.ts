import {Component} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {NgClass, NgForOf} from "@angular/common";
import {SubCategory} from "../../../shared/model/sub-category.model";

@Component({
    selector: 'app-sub-category-sidebar',
    standalone: true,
    imports: [
        NgForOf,
        NgClass
    ],
    templateUrl: './sub-category-sidebar.component.html',
    styleUrl: './sub-category-sidebar.component.css'
})
export class SubCategorySidebarComponent {

    subCategoryId!: number;
    subCategoryList!: SubCategory[];

    constructor(private categoryService: CategoryService) {

        this.categoryService.getCategoryId$().subscribe(categoryId => {
            this.subCategoryList = categoryService.getSubCategoryListByCategoryId(categoryId);
            categoryService.updateSubCategoryId(0);     //  Reset to "All" sub category id
        });

        this.categoryService.getSubCategoryId$().subscribe(subCategoryId => this.subCategoryId = subCategoryId);

    }

    setSubCategoryId(id: number) {
        this.categoryService.updateSubCategoryId(id);
    }

}

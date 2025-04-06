import {Component} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {NgClass, NgForOf} from "@angular/common";
import {Subcategory} from "../../../shared/model/subcategory.model";

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
export class SubcategorySidebarComponent {

    subCategoryId!: number;
    subCategoryList!: Subcategory[];

    constructor(private categoryService: CategoryService) {

        this.categoryService.getCategoryId$().subscribe(categoryId => {
            this.subCategoryList = categoryService.getSubcategoryListByCategoryId(categoryId);
            categoryService.updateSubcategoryId(0);     //  Reset to "All" sub category id
        });

        this.categoryService.getSubcategoryId$().subscribe(subCategoryId => this.subCategoryId = subCategoryId);

    }

    setSubcategoryId(id: number) {
        this.categoryService.updateSubcategoryId(id);
    }

}

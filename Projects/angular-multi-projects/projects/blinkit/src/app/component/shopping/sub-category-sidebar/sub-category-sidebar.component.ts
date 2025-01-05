import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {CategoryService} from "../../../service/category.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sub-category-sidebar',
  standalone: true,
    imports: [
        NgForOf,
        RouterLink
    ],
  templateUrl: './sub-category-sidebar.component.html',
  styleUrl: './sub-category-sidebar.component.css'
})
export class SubCategorySidebarComponent {

    subCategoryList: Category[];

    constructor(private categoryService: CategoryService) {
        this.subCategoryList = categoryService.getSubCategoryList();
    }
}

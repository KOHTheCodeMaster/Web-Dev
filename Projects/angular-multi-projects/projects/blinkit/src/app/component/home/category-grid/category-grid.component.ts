import {Component} from '@angular/core';
import {Category} from "../../../shared/model/category.model";
import {NgFor} from "@angular/common";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-category-grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './category-grid.component.html',
  styleUrl: './category-grid.component.css'
})
export class CategoryGridComponent {

    categoryList!: Category[];

    constructor(private CategoryGridService: CategoryService) {
        this.categoryList = this.CategoryGridService.getCategoryList();
    }

    handleCategoryItemClick(categoryId: number) {
        console.log('Category Id: ' + categoryId);
    }

}

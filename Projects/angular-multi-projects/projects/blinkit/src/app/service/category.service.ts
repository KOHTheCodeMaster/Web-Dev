import {Injectable} from '@angular/core';
import {Category} from "../shared/model/category.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private categoryList !: Category[];
    private categoryToSubCategoryListMap !: Map<number, Category[]>;
    private categoryId$!: BehaviorSubject<number>;
    private subCategoryId$!: BehaviorSubject<number>;

    constructor() {

        this.initCategoryList();
        this.initCategoryMap();

        this.initDataMembers();

    }

    private initDataMembers() {

        this.categoryId$ = new BehaviorSubject<number>(1);
        this.subCategoryId$ = new BehaviorSubject<number>(0);

    }

    updateCategoryId(categoryId: number) {
        this.categoryId$.next(categoryId);
    }

    updateSubCategoryId(subCategoryId: number) {
        this.subCategoryId$.next(subCategoryId);
    }

    initCategoryList() {
        this.categoryList = [
            new Category(1, 'Vegetables & Fruits'),
            new Category(2, 'Dairy & Breakfast'),
            new Category(3, 'Munchies'),
            new Category(4, 'Cold Drinks & Juices'),
            new Category(5, 'Instant & Frozen Food'),
            new Category(6, 'Tea, Coffee & Health Drinks'),
            new Category(7, 'Bakery & Biscuits')
        ];
    }

    initCategoryMap() {

        this.categoryToSubCategoryListMap = new Map<number, Category[]>();

        for (let category of this.categoryList)
            this.categoryToSubCategoryListMap.set(category.getId(), this.generateSubCategoryList(category.getId()));

    }

    private generateSubCategoryList(categoryId: number): Category[] {
        let subCategoryList: Category[];

        switch (categoryId) {
            case 1:
                subCategoryList = [
                    new Category(1, 'Fresh Vegetables'),
                    new Category(2, 'Fresh Fruits'),
                    new Category(3, 'Mangoes & Melons'),
                    new Category(4, 'Seasonal'),
                    new Category(5, 'Exotics')
                ];
                break;

            case 2:
                subCategoryList = [
                    new Category(1, 'Milk'),
                    new Category(2, 'Bread & Pav'),
                    new Category(3, 'Eggs'),
                    new Category(4, 'Flakes & Kids Cereals'),
                    new Category(5, 'Muesli & Granola')
                ];
                break;

            case 3:
                subCategoryList = [
                    new Category(1, 'Chips & Crisps'),
                    new Category(2, 'Rusks & Wafers'),
                    new Category(3, 'Energy Bars'),
                    new Category(4, 'Nachos'),
                    new Category(5, 'Bhujia & Mixtures')
                ];
                break;

            case 4:
                subCategoryList = [
                    new Category(1, 'Beverages Gift Packs'),
                    new Category(2, 'Soft Drinks'),
                    new Category(3, 'Fruit Juices'),
                    new Category(4, 'Mango Drinks'),
                    new Category(5, 'Pure Juices')
                ];
                break;

            case 5:
                subCategoryList = [
                    new Category(1, 'Noodles'),
                    new Category(2, 'Frozen Veg Snacks'),
                    new Category(3, 'Frozen Non-Veg Snacks'),
                    new Category(4, 'Pasta'),
                    new Category(5, 'Instant Mixes')
                ];
                break;

            case 6:
                subCategoryList = [
                    new Category(1, 'Tea'),
                    new Category(2, 'Coffee'),
                    new Category(3, 'Milk Drinks'),
                    new Category(4, 'Green & Flavoured Tea'),
                    new Category(5, 'Herbal Drinks')
                ];
                break;

            case 7:
                subCategoryList = [
                    new Category(1, 'Biscuit Gift Pack'),
                    new Category(2, 'Bread & Pav'),
                    new Category(3, 'Cookies'),
                    new Category(4, 'Cream Biscuits'),
                    new Category(5, 'Glucose & Marie')
                ];
                break;

            default:
                subCategoryList = [
                    new Category(1, 'Milk'),
                    new Category(2, 'Bread & Pav'),
                    new Category(3, 'Eggs'),
                    new Category(4, 'Flakes & Kids Cereals'),
                    new Category(5, 'Muesli & Granola')
                ];
                break;
        }

        return subCategoryList;
    }


    //  Getters
    //  -------

    getCategoryList(): Category[] {
        return this.categoryList;
    }

    getSubCategoryList(categoryId: number): Category[] {
        return this.categoryToSubCategoryListMap.get(parseInt(categoryId.toString())) || [];
    }

    getCategoryId$(): Observable<number> {
        return this.categoryId$.asObservable();
    }

    getSubCategoryId$(): Observable<number> {
        return this.subCategoryId$.asObservable();
    }

}

import {Injectable} from '@angular/core';
import {Category} from "../shared/model/category.model";
import {BehaviorSubject, Observable} from "rxjs";
import {SubCategory} from "../shared/model/sub-category.model";
import {DataLoaderService} from "./data-loader.service";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private categoryList !: Category[];
    private subCategoryList !: SubCategory[];
    private categoryIdToSubCategoryListMap !: Map<number, SubCategory[]>;
    private categoryId$!: BehaviorSubject<number>;
    private subCategoryId$!: BehaviorSubject<number>;

    constructor(private dataLoaderService: DataLoaderService) {

        this.initDataMembers();

        this.initSubscriptions();

        // this.initCategoryList();

        // this.initCategoryMap();

    }

    private initSubscriptions() {

        this.dataLoaderService.getDataLoaded$().subscribe((dataLoaded: boolean) => {

            // console.log('CategoryService - initSubscriptions() method - dataLoaded: ', dataLoaded);

            if (dataLoaded) {

                //  Initialize Category List
                this.categoryList = this.dataLoaderService.getDataList('categories').map(category => new Category(category['name'], category['id']));

                //  Initialize SubCategory List
                this.subCategoryList = this.dataLoaderService.getDataList('subcategories').map(subcategory => new SubCategory(subcategory['categoryId'], subcategory['name'], subcategory['id']));

                //  Initialize Category to SubCategory Map
                this.categoryIdToSubCategoryListMap = new Map<number, SubCategory[]>();

                for (let category of this.categoryList) {
                    let filteredSubCategoryList: SubCategory[] = this.subCategoryList
                        .filter(subcategory => subcategory.getCategoryId() === category.getId());

                    this.categoryIdToSubCategoryListMap.set(category.getId(), filteredSubCategoryList);
                }

            }

        });

    }

    private initCategoryList() {
        this.categoryList = [
            new Category('Vegetables & Fruits'),
            new Category('Dairy & Breakfast'),
            new Category('Munchies'),
            new Category('Cold Drinks & Juices'),
            new Category('Instant & Frozen Food'),
            new Category('Tea, Coffee & Health Drinks'),
            new Category('Bakery & Biscuits')
        ];

    }

    private initDataMembers() {

        this.categoryId$ = new BehaviorSubject<number>(1);
        this.subCategoryId$ = new BehaviorSubject<number>(0);

        this.categoryList = [];
        this.categoryIdToSubCategoryListMap = new Map<number, SubCategory[]>();

    }

    private initCategoryMap() {

        this.categoryIdToSubCategoryListMap = new Map<number, SubCategory []>();
        for (let category of this.categoryList)
            this.categoryIdToSubCategoryListMap.set(category.getId(), this.generateSubCategoryList(category));

    }

    private generateSubCategoryList(category: Category): SubCategory[] {

        let subCategoryList: SubCategory[];

        switch (category.getName()) {
            case 'Vegetables & Fruits':
                subCategoryList = [
                    new SubCategory(category.getId(), 'Fresh Vegetables'),
                    new SubCategory(category.getId(), 'Fresh Fruits'),
                    new SubCategory(category.getId(), 'Mangoes & Melons'),
                    new SubCategory(category.getId(), 'Seasonal'),
                    new SubCategory(category.getId(), 'Exotics')
                ];
                break;

            case 'Dairy & Breakfast':
                subCategoryList = [
                    new SubCategory(category.getId(), 'Milk'),
                    new SubCategory(category.getId(), 'Bread & Pav'),
                    new SubCategory(category.getId(), 'Eggs'),
                    new SubCategory(category.getId(), 'Flakes & Kids Cereals'),
                    new SubCategory(category.getId(), 'Muesli & Granola')
                ];
                break;

            case 'Munchies':
                subCategoryList = [
                    new SubCategory(category.getId(), 'Chips & Crisps'),
                    new SubCategory(category.getId(), 'Rusks & Wafers'),
                    new SubCategory(category.getId(), 'Energy Bars'),
                    new SubCategory(category.getId(), 'Nachos'),
                    new SubCategory(category.getId(), 'Bhujia & Mixtures')
                ];
                break;

            case 'Cold Drinks & Juices':
                subCategoryList = [
                    new SubCategory(category.getId(), 'Beverages Gift Packs'),
                    new SubCategory(category.getId(), 'Soft Drinks'),
                    new SubCategory(category.getId(), 'Fruit Juices'),
                    new SubCategory(category.getId(), 'Mango Drinks'),
                    new SubCategory(category.getId(), 'Pure Juices')
                ];
                break;

            case 'Instant & Frozen Food':
                subCategoryList = [
                    new SubCategory(category.getId(), 'Noodles'),
                    new SubCategory(category.getId(), 'Frozen Veg Snacks'),
                    new SubCategory(category.getId(), 'Frozen Non-Veg Snacks'),
                    new SubCategory(category.getId(), 'Pasta'),
                    new SubCategory(category.getId(), 'Instant Mixes')
                ];
                break;

            case 'Tea, Coffee & Health Drinks':
                subCategoryList = [
                    new SubCategory(category.getId(), 'Tea'),
                    new SubCategory(category.getId(), 'Coffee'),
                    new SubCategory(category.getId(), 'Milk Drinks'),
                    new SubCategory(category.getId(), 'Green & Flavoured Tea'),
                    new SubCategory(category.getId(), 'Herbal Drinks')
                ];
                break;

            case 'Bakery & Biscuits':
                subCategoryList = [
                    new SubCategory(category.getId(), 'Biscuit Gift Pack'),
                    new SubCategory(category.getId(), 'Bread & Pav'),
                    new SubCategory(category.getId(), 'Cookies'),
                    new SubCategory(category.getId(), 'Cream Biscuits'),
                    new SubCategory(category.getId(), 'Glucose & Marie')
                ];
                break;

            default:
                console.log('Invalid Category');
                subCategoryList = [];
                break;
        }

        return subCategoryList;
    }

    updateCategoryId(categoryId: number) {
        this.categoryId$.next(categoryId);
    }

    updateSubCategoryId(subCategoryId: number) {
        this.subCategoryId$.next(subCategoryId);
    }

    getCategoryById(categoryId: number): Category {
        let category = this.categoryList.find(category => category.getId() === categoryId);

        if (category === undefined) throw new Error(`Category with ID ${categoryId} not found.`);
        return category;
    }

    getSubCategoryById(subCategoryId: number) {
        let subCategory = this.subCategoryList.find(subCategory => subCategory.getId() === subCategoryId);

        if (subCategory === undefined) throw new Error(`SubCategory with ID ${subCategoryId} not found.`);
        return subCategory;
    }

    getSubCategoryListByCategoryId(categoryId: number): SubCategory[] {
        console.log('categoryIdToSubCategoryListMap', this.categoryIdToSubCategoryListMap);
        let subCategoryList = this.categoryIdToSubCategoryListMap.get(categoryId);

        if (subCategoryList === undefined) throw new Error(`SubCategory list for Category ID ${categoryId} not found.`);
        return subCategoryList;
    }

    //  Getters

    //  -------

    getCategoryList(): Category[] {
        return this.categoryList;
    }

    getSubCategoryList(): SubCategory[] {
        return this.subCategoryList;
    }

    getCategoryId$(): Observable<number> {
        return this.categoryId$.asObservable();
    }

    getSubCategoryId$(): Observable<number> {
        return this.subCategoryId$.asObservable();
    }

    getCategoryIdToSubCategoryListMap(): Map<number, SubCategory[]> {
        return this.categoryIdToSubCategoryListMap;
    }

}

import {Injectable} from '@angular/core';
import {Category} from "../shared/model/category.model";
import {BehaviorSubject, Observable} from "rxjs";
import {DataLoaderService} from "./data-loader.service";
import {Subcategory} from "../shared/model/subcategory.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private categoryList !: Category[];
    private subCategoryList !: Subcategory[];
    private categoryIdToSubcategoryListMap !: Map<number, Subcategory[]>;
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
                this.categoryList = (this.dataLoaderService.getDataLoaded('category') as []).map(category => new Category(category['id'], category['name']));

                //  Initialize Subcategory List
                this.subCategoryList = (this.dataLoaderService.getDataLoaded('subcategory') as []).map(subcategory => new Subcategory(subcategory['id'],
                        subcategory['name'],
                        new Category(subcategory['category']['id'], subcategory['category']['name'])));

                //  Initialize Category to Subcategory Map
                this.categoryIdToSubcategoryListMap = new Map<number, Subcategory[]>();

                for (let category of this.categoryList) {
                    let filteredSubcategoryList: Subcategory[] = this.subCategoryList
                        .filter(subcategory => subcategory.getCategory().getId() === category.getId());

                    this.categoryIdToSubcategoryListMap.set(category.getId(), filteredSubcategoryList);
                }

            }

        });

    }

    /*
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
    */

    private initDataMembers() {

        this.categoryId$ = new BehaviorSubject<number>(1);
        this.subCategoryId$ = new BehaviorSubject<number>(0);

        this.categoryList = [];
        this.categoryIdToSubcategoryListMap = new Map<number, Subcategory[]>();

    }

    /*
        private initCategoryMap() {

            this.categoryIdToSubcategoryListMap = new Map<number, Subcategory []>();
            for (let category of this.categoryList)
                this.categoryIdToSubcategoryListMap.set(category.getId(), this.generateSubcategoryList(category));

        }
    */

    updateCategoryId(categoryId: number) {
        this.categoryId$.next(categoryId);
    }

    updateSubcategoryId(subCategoryId: number) {
        this.subCategoryId$.next(subCategoryId);
    }

    getCategoryById(categoryId: number): Category {
        let category = this.categoryList.find(category => category.getId() === categoryId);

        if (category === undefined) throw new Error(`Category with ID ${categoryId} not found.`);
        return category;
    }

    getSubcategoryById(subCategoryId: number) {
        let subCategory = this.subCategoryList.find(subCategory => subCategory.getId() === subCategoryId);

        if (subCategory === undefined) throw new Error(`Subcategory with ID ${subCategoryId} not found.`);
        return subCategory;
    }

    getSubcategoryListByCategoryId(categoryId: number): Subcategory[] {
        // console.log('categoryIdToSubcategoryListMap', this.categoryIdToSubcategoryListMap);
        let subCategoryList = this.categoryIdToSubcategoryListMap.get(categoryId);

        if (subCategoryList === undefined) throw new Error(`Subcategory list for Category ID ${categoryId} not found.`);
        return subCategoryList;
    }

    //  Getters

    //  -------

    getCategoryList(): Category[] {
        return this.categoryList;
    }

    getSubcategoryList(): Subcategory[] {
        return this.subCategoryList;
    }

    getCategoryId$(): Observable<number> {
        return this.categoryId$.asObservable();
    }

    getSubcategoryId$(): Observable<number> {
        return this.subCategoryId$.asObservable();
    }

    getCategoryIdToSubcategoryListMap(): Map<number, Subcategory[]> {
        return this.categoryIdToSubcategoryListMap;
    }

}

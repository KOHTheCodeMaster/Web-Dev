import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DataLoaderService {

    private dataLoaded$!: BehaviorSubject<boolean>;
    private nameToJsonFilePathMap!: Map<string, string>;
    private nameToJsonDataMap!: Map<string, any[]>;

    constructor() {

        this.initDataMembers().then(() => this.dataLoaded$.next(true));

    }

    private async initDataMembers() {

        this.dataLoaded$ = new BehaviorSubject<boolean>(false);

        this.initNameToJsonFilePathMap();

        await this.initNameToJsonDataMap();
        // await this.initNameToJsonDataMapFromDB();

    }

    private initNameToJsonFilePathMap() {

        this.nameToJsonFilePathMap = new Map<string, string>();

        this.nameToJsonFilePathMap.set('product', '/assets/json/product.json');
        this.nameToJsonFilePathMap.set('category', '/assets/json/category.json');
        this.nameToJsonFilePathMap.set('subcategory', '/assets/json/subcategory.json');
        this.nameToJsonFilePathMap.set('user', '/assets/json/user.json');

    }

    private async initNameToJsonDataMap() {

        this.nameToJsonDataMap = new Map<string, []>();

        for (const [name, jsonFilePath] of this.nameToJsonFilePathMap.entries()) {
            const dataList = await this.loadDataListFromJsonFile(jsonFilePath, name);
            this.nameToJsonDataMap.set(name, dataList);
        }

    }

    private async initNameToJsonDataMapFromDB() {

        this.nameToJsonDataMap = new Map<string, []>();

        // const categoryList = await this.loadDataListFromJsonFile('/assets/json/category.json', 'category');
        // this.nameToJsonDataMap.set('category', categoryList);

        // const subcategoryList = await this.loadDataListFromJsonFile('/assets/json/subcategory.json', 'subcategory');
        // this.nameToJsonDataMap.set('subcategory', subcategoryList);

        // const productList = await this.loadDataListFromJsonFile('/assets/json/products.json', 'products');
        // this.nameToJsonDataMap.set('products', productList);

        // const userList = await this.loadDataListFromJsonFile('/assets/json/user.json', 'user');
        // this.nameToJsonDataMap.set('user', userList);

    }

    async loadDataListFromJsonFile(jsonFilePath: string, name: string): Promise<any[]> {

        let dataList: [] = [];

        //  Fetch Data from JSON File
        await fetch(jsonFilePath)
            .then(response => response.json())
            .then(jsonResponse => {

                let tempList = jsonResponse[this.getJsonKeyForName(name)];

                if (tempList && tempList.length > 0)
                    dataList = tempList as [];

            });

        return dataList;

    }

    getJsonKeyForName(name: string): string {
        if (name === 'product') return 'products';
        else if (name === 'category') return 'categories';
        else if (name === 'subcategory') return 'subcategories';
        else if (name === 'user') return 'users';
        else return '';
    }

    getDataLoaded$(): Observable<boolean> {
        return this.dataLoaded$;
    }

    getDataList(name: string): [] {
        return this.nameToJsonDataMap.has(name) ? this.nameToJsonDataMap.get(name) as [] : [];
    }

}

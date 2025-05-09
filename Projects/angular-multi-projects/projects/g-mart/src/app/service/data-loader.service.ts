import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DataLoaderService {

    private readonly BASE_API_URL: string = 'http://localhost:8081/g-mart/api';
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
            const dataList = await this.loadDataListFromJsonFile(jsonFilePath);
            this.nameToJsonDataMap.set(name, dataList);
        }

    }

    private async initNameToJsonDataMapFromDB() {

        this.nameToJsonDataMap = new Map<string, []>();

        const categoryList = await this.loadDataListFromDB(this.BASE_API_URL + '/category/all');
        this.nameToJsonDataMap.set('category', categoryList);

        const subcategoryList = await this.loadDataListFromDB(this.BASE_API_URL + '/subcategory/all');
        this.nameToJsonDataMap.set('subcategory', subcategoryList);

        const productList = await this.loadDataListFromDB(this.BASE_API_URL + '/product/all');
        this.nameToJsonDataMap.set('product', productList);

        // const userList = await this.loadDataListFromDB(this.BASE_API_URL + '/user');
        // this.nameToJsonDataMap.set('user', userList);

    }

    async loadDataListFromJsonFile(jsonFilePath: string): Promise<any[]> {

        let dataList: [] = [];

        //  Fetch Data from JSON File
        await fetch(jsonFilePath)
            .then(response => response.json())
            .then(jsonResponse => {
                let tempList = jsonResponse;
                if (tempList && tempList.length > 0) dataList = tempList as [];
            });

        return dataList;

    }

    async loadDataListFromJsonFileWithNameKey(jsonFilePath: string, name: string): Promise<any[]> {

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

    private async loadDataListFromDB(url: string): Promise<any[]> {
        let dataList: [] = [];

        await fetch(url)
            .then(response => response.json())
            .then(jsonResponse => {
                let tempList = jsonResponse;
                if (tempList && tempList.length > 0) dataList = tempList as [];
            });

        return dataList;
    }

}

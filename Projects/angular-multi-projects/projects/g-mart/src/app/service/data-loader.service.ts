import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DataLoaderService {

    private readonly BASE_API_URL: string = 'http://localhost:8081/g-mart/api';
    private dataLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private readonly nameToJsonFilePathMap: Map<string, string> = new Map<string, string>();
    private readonly nameToJsonDataMap: Map<string, any> = new Map<string, []>();

    constructor() {

        this.initDataMembers().then(() => this.dataLoaded$.next(true));

    }

    private async initDataMembers() {

        this.dataLoaded$

        //  Reset the post-login URL in localStorage to default home page
        localStorage.setItem('postLoginUrl', '/');

        this.initNameToJsonFilePathMap();

        await this.initNameToJsonDataMap();
        // await this.initNameToJsonDataMapFromDB();

    }

    private initNameToJsonFilePathMap() {

        this.nameToJsonFilePathMap.set('category', '/assets/json/category.json');
        this.nameToJsonFilePathMap.set('subcategory', '/assets/json/subcategory.json');
        this.nameToJsonFilePathMap.set('product', '/assets/json/product.json');
        this.nameToJsonFilePathMap.set('address', '/assets/json/address.json');
        // this.nameToJsonFilePathMap.set('order', '/assets/json/order.json');
        this.nameToJsonFilePathMap.set('user', '/assets/json/user.json');
        this.nameToJsonFilePathMap.set('user-data', '/assets/json/user-data.json');

    }

    private async initNameToJsonDataMap() {

        for (const [name, jsonFilePath] of this.nameToJsonFilePathMap.entries()) {
            const dataLoaded: any = await this.loadDataFromJsonFile(jsonFilePath);
            this.nameToJsonDataMap.set(name, dataLoaded);
        }

    }

    private async initNameToJsonDataMapFromDB() {

        const categoryList = await this.loadDataListFromDB(this.BASE_API_URL + '/category/all');
        this.nameToJsonDataMap.set('category', categoryList);

        const subcategoryList = await this.loadDataListFromDB(this.BASE_API_URL + '/subcategory/all');
        this.nameToJsonDataMap.set('subcategory', subcategoryList);

        const productList = await this.loadDataListFromDB(this.BASE_API_URL + '/product/all');
        this.nameToJsonDataMap.set('product', productList);

        // const userList = await this.loadDataListFromDB(this.BASE_API_URL + '/user');
        // this.nameToJsonDataMap.set('user', userList);

    }

    async loadDataFromJsonFile(jsonFilePath: string): Promise<any> {

        let data: any = {};

        //  Fetch Data from JSON File
        await fetch(jsonFilePath)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse) data = jsonResponse;
            });

        return data;

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

    getDataLoaded(name: string): any {
        return this.nameToJsonDataMap.has(name) ? this.nameToJsonDataMap.get(name) : {};
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

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

        this.nameToJsonFilePathMap.set('products', '/assets/json/products.json');
        this.nameToJsonFilePathMap.set('categories', '/assets/json/categories.json');
        this.nameToJsonFilePathMap.set('subcategories', '/assets/json/subcategories.json');
        this.nameToJsonFilePathMap.set('users', '/assets/json/users.json');

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

/*
        for (const [name, jsonFilePath] of this.nameToJsonFilePathMap.entries()) {
            const dataList = await this.loadDataListFromJsonFile(jsonFilePath, name);
            this.nameToJsonDataMap.set(name, dataList);
        }
*/

    }

    async loadDataListFromJsonFile(jsonFilePath: string, name: string): Promise<any[]> {

        let dataList: [] = [];

        //  Fetch Data from JSON File
        await fetch(jsonFilePath)
            .then(response => response.json())
            .then(jsonResponse => {

                let tempList = jsonResponse[name];

                if (tempList && tempList.length > 0)
                    dataList = tempList as [];

            });

        return dataList;

    }

    getDataLoaded$(): Observable<boolean> {
        return this.dataLoaded$;
    }

    getDataList(name: string): any[] {
        return this.nameToJsonDataMap.has(name) ? this.nameToJsonDataMap.get(name) as any[] : [];
    }

}

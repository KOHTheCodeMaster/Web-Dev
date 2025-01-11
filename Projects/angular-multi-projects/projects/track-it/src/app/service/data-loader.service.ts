import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Label} from "../shared/model/label.model";

@Injectable({
    providedIn: 'root'
})
export class DataLoaderService {

    private isDataLoaded$!: BehaviorSubject<boolean>;
    private nameToJsonFilePathMap!: Map<string, string>;
    private nameToJsonDataMap!: Map<string, any[]>;

    constructor() {

        this.initDataMembers();

/*
        this.isDataLoaded$.subscribe((isDataLoaded: boolean) => {

            // console.log('isDataLoaded:', isDataLoaded);

            if (isDataLoaded) {
                // console.log('Data Loaded Successfully.');
                // console.log('Data:', this.nameToJsonDataMap);
            }

        });
*/

    }

    private initDataMembers() {

        this.isDataLoaded$ = new BehaviorSubject<boolean>(false);

        this.initNameToJsonFilePathMap();

        this.initNameToJsonDataMap()
            .then(() => {

                // console.log('initNameToJsonDataMap().then() method - started.');

                this.isDataLoaded$.next(true);

                // console.log('isDataLoaded:', this.isDataLoaded$.getValue());
                // console.log('After initNameToJsonDataMap() method.');
                // console.log('Data Loaded Successfully.');
                // console.log('Data:', this.nameToJsonDataMap);

                // console.log('initNameToJsonDataMap().then() method - completed.');

            })
            .catch(() => {
                console.log('Error loading data.');
                this.isDataLoaded$.next(false);
            });

    }

    private async initNameToJsonDataMap() {

        // console.log('initNameToJsonDataMap() method - started.');

        this.nameToJsonDataMap = new Map<string, []>();

        let name = 'label';
        let jsonFilePath: string = this.nameToJsonFilePathMap.get(name) as string;

        await this.loadDataListFromJsonFile(jsonFilePath)
            .then((dataList) => {

                // console.log('Name:', name);
                // console.log('Data List:', dataList);
                this.nameToJsonDataMap.set(name, dataList);

            });

        /*this.nameToJsonFilePathMap.forEach(async (jsonFilePath: string, name: string) => {

            let dataList = await this.loadDataListFromJsonFile(jsonFilePath);
            this.nameToJsonDataMap.set(name, dataList);

        });*/

        // console.log('initNameToJsonDataMap() method - completed.');

    }

    async loadDataListFromJsonFile(jsonFilePath: string): Promise<Label[]> {

        // console.log('loadDataListFromJsonFile() method - started.');

        let labelList: Label[] = [];

        //  Fetch Data from JSON File
        await fetch(jsonFilePath)
            .then(response => response.json())
            .then(dataJson => {

                labelList = dataJson['labels'];
                // console.log('Fetching Data from:', jsonFilePath);
                // console.log('Data:', labelList);

            });

        // console.log('loadDataListFromJsonFile() method - completed.');

        return labelList;

    }

    getIsDataLoaded$(): Observable<boolean> {
        return this.isDataLoaded$;
    }

    getDataList(name: string): any[] | undefined {
        return this.nameToJsonDataMap.get(name);
    }

    private initNameToJsonFilePathMap() {

        this.nameToJsonFilePathMap = new Map<string, string>();

        this.nameToJsonFilePathMap.set('user', '/assets/json/users.json');
        this.nameToJsonFilePathMap.set('label', '/assets/json/labels.json');
        this.nameToJsonFilePathMap.set('project', '/assets/json/projects.json');
        this.nameToJsonFilePathMap.set('section', '/assets/json/sections.json');
        this.nameToJsonFilePathMap.set('task', '/assets/json/tasks.json');

    }

}

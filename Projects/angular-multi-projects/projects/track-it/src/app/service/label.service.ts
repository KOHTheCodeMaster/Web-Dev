import {Injectable} from '@angular/core';
import {Label} from "../shared/model/label.model";
import {DataLoaderService} from "./data-loader.service";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LabelService {

    private labelListUpdated$: Subject<boolean>;
    private labelList: Label[];

    constructor(private jsonLoaderService: DataLoaderService) {

        this.labelListUpdated$ = new BehaviorSubject<boolean>(false);

        this.labelList = [];
        this.initLabelList();

    }

    private initLabelList() {

        this.jsonLoaderService.getIsDataLoaded$().subscribe((isDataLoaded: boolean) => {

            if (isDataLoaded) {
                this.labelList = this.jsonLoaderService.getDataList('label') as Label[];
                this.labelListUpdated$.next(true);
            }

        });

    }

    public getLabels(): Label[] {
        return this.labelList;
    }

    public getLabelListUpdated$(): Observable<boolean> {
        return this.labelListUpdated$.asObservable();
    }

}

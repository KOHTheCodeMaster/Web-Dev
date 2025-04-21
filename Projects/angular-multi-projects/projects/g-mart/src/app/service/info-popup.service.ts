import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {InfoPopupType} from "../shared/model/InfoPopupType";

@Injectable({
    providedIn: 'root'
})
export class InfoPopupService {

    private popupType$: BehaviorSubject<InfoPopupType>;

    constructor() {
        this.popupType$ = new BehaviorSubject<InfoPopupType>(InfoPopupType.NONE);
    }

    openPopup(infoPopupType: InfoPopupType) {
        this.popupType$.next(infoPopupType);
    }

    closePopup() {
        this.popupType$.next(InfoPopupType.NONE);
    }

    //  Getters
    //  -------

    public getPopupType$(): Observable<InfoPopupType> {
        return this.popupType$.asObservable();
    }

}

import {Component} from '@angular/core';
import {InfoPopupService} from "../../service/info-popup.service";
import {Observable} from "rxjs";
import {InfoPopupType} from "../../shared/model/InfoPopupType";
import {AsyncPipe, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";

@Component({
    selector: 'app-info-popup-host',
    standalone: true,
    imports: [
        AsyncPipe,
        NgSwitch,
        NgSwitchCase,
        NgIf
    ],
    templateUrl: './info-popup-host.component.html'
})
export class InfoPopupHostComponent {

    private popupType$: Observable<InfoPopupType>;

    constructor(public infoPopupService: InfoPopupService) {
        this.popupType$ = infoPopupService.getPopupType$();
    }

    //  Getters
    //  -------

    public getPopupType$(): Observable<InfoPopupType> {
        return this.popupType$;
    }

}

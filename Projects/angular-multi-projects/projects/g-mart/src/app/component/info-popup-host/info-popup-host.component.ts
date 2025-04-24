import {Component} from '@angular/core';
import {InfoPopupService} from "../../service/info-popup.service";
import {InfoPopupType} from "../../shared/model/InfoPopupType";
import {NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {MultipleChargesModel} from "../../shared/model/multiple-charges.model";

@Component({
    selector: 'app-info-popup-host',
    standalone: true,
    imports: [
        NgSwitch,
        NgSwitchCase,
        NgIf
    ],
    templateUrl: './info-popup-host.component.html'
})
export class InfoPopupHostComponent {

    protected readonly MultipleChargesModel = MultipleChargesModel;
    protected readonly InfoPopupType = InfoPopupType;
    private infoPopupType: InfoPopupType = InfoPopupType.NONE;

    constructor(public infoPopupService: InfoPopupService) {
        this.initSubscriptions();
    }

    private initSubscriptions() {
        this.infoPopupService.getPopupType$().subscribe(infoPopupType => this.infoPopupType = infoPopupType);
    }


    //  Getters
    //  -------

    public getInfoPopupType(): InfoPopupType {
        return this.infoPopupType;
    }

}

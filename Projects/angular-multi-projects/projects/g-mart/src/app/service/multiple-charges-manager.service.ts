import {Injectable} from '@angular/core';
import {MultipleChargesModel} from "../shared/model/multiple-charges.model";

@Injectable({
    providedIn: 'root'
})
export class MultipleChargesManagerService {

    private readonly multipleChargesModel: MultipleChargesModel;

    constructor() {
        this.multipleChargesModel = new MultipleChargesModel();
        this.multipleChargesModel.setCheckHighDemandSurgeChargeFlag(true);
    }

    //  Getters
    //  -------

    public getMultipleChargesModel(): MultipleChargesModel {
        return this.multipleChargesModel;
    }

}

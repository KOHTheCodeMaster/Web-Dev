import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Address} from "../shared/model/address.model";

@Injectable({
    providedIn: 'root'
})
export class AddressService {

    private readonly isEditDialogOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    addressList: Address[] = [];

    constructor() {

        //  Initialize the address list
        this.initAddressList();

    }

    private initAddressList() {

        this.addressList = [];

        this.addressList.push(new Address(
            1,
            "Mall",
            'GT Central',
            0,
            "Malviya Nagar, Jaipur",
            "WTP",
            "John Doe",
            1234567890,
            ""));
        this.addressList.push(new Address(
            2,
            "Work",
            'Plot-001',
            1,
            "Mansarovar",
            "Isckon Temple",
            "Jane Doe",
            9876543210,
            ""));
    }

    updateIsEditDialogOpenedValue(flag: boolean) {
        this.isEditDialogOpened$.next(flag);
    }


    //  Getters
    //  -------

    public getAddressList(): Address[] {
        return this.addressList;
    }

    getIsEditDialogOpened$(): Observable<boolean> {
        return this.isEditDialogOpened$.asObservable();
    }

}

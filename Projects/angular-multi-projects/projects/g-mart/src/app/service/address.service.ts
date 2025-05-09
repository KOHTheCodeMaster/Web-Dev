import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Address} from "../shared/model/address.model";

@Injectable({
    providedIn: 'root'
})
export class AddressService {

    private readonly isEditDialogOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private selectedAddress$: BehaviorSubject<Address> = new BehaviorSubject<Address>(this.createEmptyAddress());
    addressList: Address[] = [];

    constructor() {

        //  Initialize the address list
        this.initAddressList();

    }

    private initAddressList() {

        this.addressList = [];

        this.addressList.push(new Address(
            1,
            "Home",
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

    createEmptyAddress(): Address {
        return new Address(
            0,
            "",
            "",
            0,
            "",
            "",
            "",
            0,
            "");
    }

    updateIsEditDialogOpenedValue(flag: boolean) {
        this.isEditDialogOpened$.next(flag);
    }

    updateSelectedAddress(address: Address) {
        this.selectedAddress$.next(address);
    }


    //  Getters
    //  -------

    public getAddressList(): Address[] {
        return this.addressList;
    }

    getIsEditDialogOpened$(): Observable<boolean> {
        return this.isEditDialogOpened$.asObservable();
    }

    getSelectedAddress$(): Observable<Address> {
        return this.selectedAddress$.asObservable();
    }

}

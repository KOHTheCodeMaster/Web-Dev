import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Address} from "../shared/model/address.model";

@Injectable({
    providedIn: 'root'
})
export class AddressService {

    private readonly isEditDialogOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private selectedAddress$: BehaviorSubject<Address> = new BehaviorSubject<Address>(this.initDefaultAddress());
    private addressForEdit$: BehaviorSubject<Address | null> = new BehaviorSubject<Address | null>(null);
    addressList: Address[] = [];

    constructor() {

        //  Initialize the address list
        this.initAddressList();

    }

    private initDefaultAddress(): Address {
        return new Address(
            0,
            "",
            "",
            "",
            "Jaipur, Rajasthan",
            "",
            "",
            0,
            "");
    }

    private initAddressList() {

        this.addressList = [];

        this.addressList.push(new Address(
            1,
            "Home",
            'GT Central',
            'Ground Floor',
            "Malviya Nagar, Jaipur",
            "WTP",
            "John Doe",
            1234567890,
            ""));
        this.addressList.push(new Address(
            2,
            "Work",
            'Plot-001',
            '1st',
            "Mansarovar",
            "Isckon Temple",
            "Jane Doe",
            9876543210,
            ""));
        this.addressList.push(new Address(
            3,
            "Other",
            'GT Central',
            '2nd Floor',
            "Malviya Nagar, Jaipur",
            "Near WTP",
            "Alice Smith",
            1122334455,
            ""
        ));
        this.addressList.push(new Address(
            4,
            "Custom Label",
            'Custom House',
            '3rd Floor',
            "Malviya Nagar, Jaipur",
            "Near Custom Office",
            "Bob Brown",
            9988776655,
            ""
        ));
        this.addressList.push(new Address(
            5,
            "Default Address",
            'Default House',
            'Ground Floor',
            "Default Locality",
            "Default Landmark",
            "Default Person",
            1234567890,
            ""
        ));
        this.addressList.push(new Address(
            6,
            "Another Address",
            'Another House',
            '1st Floor',
            "Another Locality",
            "Another Landmark",
            "Another Person",
            9876543210,
            ""
        ));
    }

    updateIsEditDialogOpenedValue(flag: boolean) {
        this.isEditDialogOpened$.next(flag);
    }

    updateSelectedAddress(address: Address) {
        this.selectedAddress$.next(address);
    }

    updateSelectedAddressToDefault() {
        this.selectedAddress$.next(this.initDefaultAddress());
    }

    updateAddressForEdit(address: Address) {
        this.addressForEdit$.next(address);
    }


    //  Getters
    //  -------

    public getAddressList(): Address[] {
        return this.addressList;
    }

    getIsEditDialogOpened$(): Observable<boolean> {
        return this.isEditDialogOpened$.asObservable();
    }

    getSelectedAddress$(): BehaviorSubject<Address> {
        return this.selectedAddress$;
    }

    getAddressForEdit$(): BehaviorSubject<Address | null> {
        return this.addressForEdit$;
    }

}

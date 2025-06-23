import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Address} from "../shared/model/address.model";
import {DataLoaderService} from "./data-loader.service";
import {UserService} from "./user.service";
import {UserDataService} from "./user-data.service";

@Injectable({
    providedIn: 'root'
})
export class AddressService {

    private selectedAddress$: BehaviorSubject<Address | null> = new BehaviorSubject<Address | null>(null);
    private addressList$: BehaviorSubject<Address[] | null> = new BehaviorSubject<Address[] | null>(null);
    allAddressList: Address[] = [];

    constructor(private dataLoaderService: DataLoaderService,
                private userService: UserService,
                private userDataService: UserDataService) {

        //  Initialize the address list
        this.initAddressLists();

    }

    private initAddressLists() {
        this.dataLoaderService.getDataLoaded$().subscribe((dataLoaded: boolean) => {
            if (dataLoaded) {
                //  Initialize Address List
                this.allAddressList = (this.dataLoaderService.getDataLoaded('address') as []).map(address => new Address(
                    Number(address['id']),
                    address['label'],
                    address['houseNumberOrName'],
                    address['floor'],
                    address['locality'],
                    address['landmark'],
                    address['receiverName'],
                    Number(address['mobNumber']),
                    address['googleMapsExtras']
                ));

                this.initChangeUserSubscription();
            }
        });
    }

    initChangeUserSubscription() {
        this.userService.getLoggedInUser$().subscribe((user) => {
            if (user) {
                //  Get User Data Model
                let userDataModel = this.userDataService.getUserDataByUserId(user.getId().toString());

                if (userDataModel) {
                    //  Prepare Address List from User's saved address IDs
                    let addressList = this.prepareAddressListFromIds(userDataModel.getSavedAddressIdList());
                    this.addressList$.next(addressList);
                    // console.log('this.addressList: ', addressList);

                    //  Set the default address if available
                    if (addressList.length > 0 && userDataModel.getDefaultAddressId() !== -1) {
                        const defaultAddress: Address | null = this.getAddressById(userDataModel.getDefaultAddressId());
                        this.updateSelectedAddress(defaultAddress);
                    } else {
                        this.updateSelectedAddress(null); // No addresses available
                    }
                }
            }
        });
    }

    public createEmptyAddress(): Address {
        return new Address(
            -1,
            "",
            "",
            "",
            "",
            "",
            "",
            -1,
            "");
    }

    updateSelectedAddress(address: Address | null) {
        this.selectedAddress$.next(address);
    }

    deleteAddress(addressToDelete: Address) {
        let addressList: Address[] | null = this.addressList$.getValue();
        if (!addressList) {
            console.error("AddressService: Address list is null. Cannot delete address.");
            return;
        }
        const index = addressList.findIndex(address => address.getId() === addressToDelete.getId());
        if (index !== -1) {
            addressList.splice(index, 1);
            // Optionally, reset the selected address if it was the one deleted
            if (this.selectedAddress$.getValue()?.getId() === addressToDelete.getId()) this.updateSelectedAddress(null);
        }
    }

    addNewAddress(newAddress: Address | null) {
        let addressList: Address[] | null = this.addressList$.getValue();
        if (newAddress) {
            //  Check if the new address already exists
            const existingAddress = addressList?.find(address => address.getId() === newAddress.getId());
            if (existingAddress) Object.assign(existingAddress, newAddress);    //  Update existing address
            else addressList?.push(newAddress);                             //  Add new address
        } else console.error("AddressService: Attempted to add a null address.");
    }

    getAddressById(id: number): Address | null {
        const address: Address | undefined = this.allAddressList.find(addr => addr.getId() === id);
        return address ? address : null;
        // return address ? address.clone() : null; // Return a clone to avoid direct mutation
    }

    prepareAddressListFromIds(addressIdList: number[]) {
        let addressList: Address[] = [];
        if (addressIdList && addressIdList.length > 0) {
            addressIdList.forEach((addressId: number) => {
                let address: Address | null = this.getAddressById(addressId);
                if (address) addressList.push(address);
            });
        }
        return addressList;
    }

    //  Getters
    //  -------

    public getAddressList(): Address[] | null {
        return this.addressList$.getValue();
    }

    public getAddressList$(): BehaviorSubject<Address[] | null> {
        return this.addressList$;
    }

    getSelectedAddress$(): BehaviorSubject<Address | null> {
        return this.selectedAddress$;
    }


}

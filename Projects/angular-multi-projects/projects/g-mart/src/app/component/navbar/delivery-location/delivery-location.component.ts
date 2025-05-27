import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {CommonModule, NgFor, NgIf} from '@angular/common';
import {AddressService} from "../../../service/address.service";
import {Address} from "../../../shared/model/address.model";

@Component({
    selector: 'app-delivery-location',
    standalone: true,
    imports: [CommonModule, NgIf, NgFor],
    templateUrl: './delivery-location.component.html'
})
export class DeliveryLocationComponent {

    address: Address | null = null;
    addressList: Address[] = [];
    isSelectAddressPopupOpened = false;
    addressToDelete: Address | null = null;

    constructor(private router: Router, private addressService: AddressService) {
        this.addressService.getSelectedAddress$().subscribe(address => {
            this.address = address;
        });
        this.addressList = this.addressService.getAddressList();
    }

    toggleSelectAddressPopup() {
        this.isSelectAddressPopupOpened = !this.isSelectAddressPopupOpened;
        this.addressToDelete = null;
    }

    selectAddress(addr: Address) {
        this.addressService.updateSelectedAddress(addr);
        this.isSelectAddressPopupOpened = false;
    }

    openEditDialog(addr: Address, event: MouseEvent) {
        event.stopPropagation();
/*
        this.addressService.updateSelectedAddress(addr);
        this.addressService.updateIsEditDialogOpenedValue(true);
        this.isSelectAddressPopupOpened = false;
*/
    }

    confirmDelete(addr: Address, event: MouseEvent) {
        event.stopPropagation();
        this.addressToDelete = addr;
    }

    deleteAddress() {
        if (this.addressToDelete) {
            this.addressList = this.addressList.filter(a => a.getId() !== this.addressToDelete!.getId());
            if (this.address && this.address.getId() === this.addressToDelete.getId()) {
                // If deleted address is selected, select the first available
                if (this.addressList.length > 0) this.addressService.updateSelectedAddress(this.addressList[0]);
                else this.addressService.updateSelectedAddress(null as any);
            }
            this.addressToDelete = null;
        }
    }

    closeDeletePopup() {
        this.addressToDelete = null;
    }

    closeAllPopups() {
        this.isSelectAddressPopupOpened = false;
        this.addressToDelete = null;
    }

}

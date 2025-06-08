import {Component} from '@angular/core';
import {CommonModule, NgFor, NgIf} from '@angular/common';
import {AddressService} from "../../../service/address.service";
import {Address} from "../../../shared/model/address.model";
import {EditAddressDialogComponent} from "../../addresses/edit-address-dialog/edit-address-dialog.component";
import {UserService} from "../../../service/user.service";

@Component({
    selector: 'app-delivery-location',
    standalone: true,
    imports: [CommonModule, NgIf, NgFor, EditAddressDialogComponent],
    templateUrl: './delivery-location.component.html'
})
export class DeliveryLocationComponent {

    selectedAddress: Address | null = null;
    addressList: Address[] | null = null;
    isSelectAddressPopupOpened = false;
    addressToDelete: Address | null = null;
    addressForEdit: Address | null = null;

    constructor(public addressService: AddressService,
                protected userService: UserService) {

        this.addressService.getAddressList$().subscribe((addressList: Address[] | null) => this.addressList = addressList);
        this.addressService.getSelectedAddress$().subscribe(address => this.selectedAddress = address);
        this.addressService.getAddressForEdit$().subscribe((address: Address | null) => this.addressForEdit = address);

    }

    toggleSelectAddressPopup() {
        this.isSelectAddressPopupOpened = !this.isSelectAddressPopupOpened;
        this.addressToDelete = null;
    }

    selectAddress(addr: Address) {
        this.addressService.updateSelectedAddress(addr);
        this.isSelectAddressPopupOpened = false;
    }

    openEditDialog(address: Address, event: MouseEvent) {
        event.stopPropagation();    //  Prevent click event from propagating to the parent element that might close the popup
        this.addressService.updateIsEditDialogOpenedValue(true);
        this.addressService.updateAddressForEdit(address);
    }

    confirmDelete(addr: Address, event: MouseEvent) {
        event.stopPropagation();
        this.addressToDelete = addr;
    }

    deleteAddress() {
        if (this.addressToDelete) {
            this.addressService.deleteAddress(this.addressToDelete);
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

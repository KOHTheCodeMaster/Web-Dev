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
    addressToEdit: Address | null = null;

    constructor(public addressService: AddressService,
                protected userService: UserService) {

        this.initSubscriptions();

    }

    initSubscriptions() {
        this.addressService.getAddressList$().subscribe((addressList: Address[] | null) => this.addressList = addressList);
        this.addressService.getSelectedAddress$().subscribe(address => this.selectedAddress = address);
    }

    toggleSelectAddressPopup() {
        this.isSelectAddressPopupOpened = !this.isSelectAddressPopupOpened;
    }

    updateSelectedAddress(address: Address) {
        this.addressService.updateSelectedAddress(address);
        this.isSelectAddressPopupOpened = false;
    }

    openEditDialog(address: Address, event: MouseEvent) {
        event.stopPropagation();    //  Prevent click event from propagating to the parent element which will close the popup
        this.addressToEdit = address;
    }

    confirmDeleteDialog(addr: Address, event: MouseEvent) {
        event.stopPropagation();
        this.addressToDelete = addr;
    }

    deleteAddress() {
        if (this.addressToDelete) {
            this.addressService.deleteAddress(this.addressToDelete);
            this.addressToDelete = null;
        }
        //  ToDo: else case should never run, but need to handle this properly with logs to track unknown errors.
    }

    closeDeletePopup() {
        this.addressToDelete = null;
    }

    closeAllPopups() {
        this.isSelectAddressPopupOpened = false;
        this.addressToEdit = null;
        this.addressToDelete = null;
    }

}

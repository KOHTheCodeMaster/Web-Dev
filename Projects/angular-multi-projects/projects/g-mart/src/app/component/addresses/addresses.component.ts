import {Component, ElementRef, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AsyncPipe, NgFor, NgForOf, NgIf} from '@angular/common';
import {Address} from "../../shared/model/address.model";
import {EditAddressDialogComponent} from "./edit-address-dialog/edit-address-dialog.component";
import {AddressService} from "../../service/address.service";

@Component({
    selector: 'app-addresses',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor, NgForOf, AsyncPipe, EditAddressDialogComponent],
    templateUrl: './addresses.component.html'
})
export class AddressesComponent implements OnDestroy {

    isEditDialogOpened: boolean = false;
    addressForEdit: Address | null = null;
    addressList: Address[] | null = null;
    private deletePopupClickListener: (() => void) | undefined;
    private editDialogClickListener: (() => void) | undefined;
    @ViewChild('deleteAddressPopup', {static: false}) deleteAddressPopupElement!: ElementRef;
    @ViewChild('editAddressDialog', {static: false}) editAddressDialogElement!: ElementRef;

    constructor(private router: Router,
                private renderer: Renderer2,
                protected addressService: AddressService,
                ) {

        this.addressList = this.addressService.getAddressList();
        this.initSubscriptions();

    }

    initSubscriptions() {

        this.addressService.getAddressList$().subscribe((addressList: Address[] | null) => this.addressList = addressList);

        //  Subscribe to address isDeleteConfirmationPopupOpened value changes
        this.addressList?.forEach(address => {
            address.getIsDeleteConfirmationPopupOpened$().subscribe(isDeleteConfirmationPopupOpened => {
                // Handle click outside logic
                if (isDeleteConfirmationPopupOpened) {
                    this.removeDeletePopupClickListener(); // Remove any existing listener
                    this.deletePopupClickListener = this.renderer.listen('document', 'click', (event: Event) => {
                        const popupElement = this.deleteAddressPopupElement?.nativeElement;
                        if (popupElement && !popupElement.contains(event.target)) {
                            address.updateIsDeleteConfirmationPopupOpenedValue(false);
                            this.removeDeletePopupClickListener();
                        }
                    });
                } else {
                    // If the popup is closed, remove the click listener to avoid memory leaks
                    this.removeDeletePopupClickListener();
                }
            });
        });

        //  Subscribe to selected address value changes
        this.addressService.getAddressForEdit$().subscribe(address => {
            this.addressForEdit = address;
        });

        //  Subscribe to isEditDialogOpened value changes
        this.addressService.getIsEditDialogOpened$().subscribe(isEditDialogOpened => {
            this.isEditDialogOpened = isEditDialogOpened;
            if (isEditDialogOpened) {
                this.removeEditDialogClickListener(); // Remove any existing listener
                this.editDialogClickListener = this.renderer.listen('document', 'click', (event: Event) => {
                    const popupElement = this.editAddressDialogElement?.nativeElement;
                    if (popupElement && !popupElement.contains(event.target)) {
                        this.removeEditDialogClickListener();
                        this.addressService.updateIsEditDialogOpenedValue(false);
                    }
                });
            } else {
                // If the popup is closed, remove the click listener to avoid memory leaks
                this.removeEditDialogClickListener();
            }
        });

    }

    openEditAndDeletePopup(address: Address) {
        if (this.addressList) {
            //  Close the other edit and delete popups
            this.addressList
                .filter(addressItem => addressItem !== address)
                .forEach(addressItem => addressItem.updateIsEditAndDeletePopupOpenedValue(false));
        }

        //  Toggle the clicked address's edit and delete popup
        address.toggleEditAndDeletePopup();
    }

    handleEditBtnClick(address: Address) {
        this.addressService.updateAddressForEdit(address);
        this.addressService.updateIsEditDialogOpenedValue(true);
        address.updateIsEditAndDeletePopupOpenedValue(false);
    }

    removeDeletePopupClickListener() {
        //  Remove the click listener if it exists to avoid memory leaks
        if (this.deletePopupClickListener) {
            this.deletePopupClickListener();
            this.deletePopupClickListener = undefined;
        }
    }

    removeEditDialogClickListener() {
        //  Remove the click listener if it exists to avoid memory leaks
        if (this.editDialogClickListener) {
            this.editDialogClickListener();
            this.editDialogClickListener = undefined;
        }
    }

    addNewAddress() {
        this.addressForEdit = this.addressService.createEmptyAddress();
        this.addressService.updateIsEditDialogOpenedValue(true);
        this.addressService.updateAddressForEdit(this.addressForEdit);
    }

    handleDeleteAddress(addressToBeDeleted: Address) {
        this.addressService.deleteAddress(addressToBeDeleted);
        addressToBeDeleted.toggleEditAndDeletePopup();  //  Close the delete confirmation and edit/delete popups
    }

    ngOnDestroy() {
        //  Remove the click listener when the component is destroyed to avoid memory leaks
        this.removeDeletePopupClickListener();
        this.removeEditDialogClickListener();
    }

}

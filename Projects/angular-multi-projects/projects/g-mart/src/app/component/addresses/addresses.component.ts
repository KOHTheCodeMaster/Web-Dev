import {BehaviorSubject} from "rxjs";
import {Component, ElementRef, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AsyncPipe, NgFor, NgForOf, NgIf} from '@angular/common';
import {Address} from "../../shared/model/address.model";
import {EditAddressDialogComponent} from "./edit-address-dialog/edit-address-dialog.component";

@Component({
    selector: 'app-addresses',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor, NgForOf, AsyncPipe, EditAddressDialogComponent],
    templateUrl: './addresses.component.html'
})
export class AddressesComponent implements OnDestroy {

    addressList: Address[] = [];
    private deletePopupClickListener: (() => void) | undefined;
    private editDialogClickListener: (() => void) | undefined;
    @ViewChild('deleteAddressPopup') deleteAddressPopupElement!: ElementRef;
    @ViewChild('editAddressDialog') editAddressDialogElement!: ElementRef;
    isEditDialogOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private router: Router,
                private renderer: Renderer2) {

        this.initAddressList();
        this.initSubscriptions();

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

    initSubscriptions() {

        //  Subscribe to address isDeleteConfirmationPopupOpened value changes
        this.addressList.forEach(address => {
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

        this.isEditDialogOpened$.subscribe(isEditDialogOpened => {
            if (isEditDialogOpened) {
                console.log("Edit dialog opened");
                this.removeEditDialogClickListener(); // Remove any existing listener
                this.editDialogClickListener = this.renderer.listen('document', 'click', (event: Event) => {
                    const popupElement = this.editAddressDialogElement?.nativeElement;
                    console.log("Click event detected");
                    if (popupElement && !popupElement.contains(event.target)) {
                        this.removeEditDialogClickListener();
                        console.log("Click event detected and handled");
                        this.isEditDialogOpened$.next(false);
                    }
                });
            } else {
                // If the popup is closed, remove the click listener to avoid memory leaks
                this.removeEditDialogClickListener();
                console.log("Edit dialog closed");
            }
        });

    }

    openEditAndDeletePopup(address: Address) {
        // Close other popups
        this.addressList
            .filter(addressItem => addressItem !== address)
            .forEach(addressItem => addressItem.updateIsEditAndDeletePopupOpenedValue(false));

        // Toggle current popup
        address.toggleEditAndDeletePopup();
    }

    removeDeletePopupClickListener() {
        console.log("Removing Delete Popup click listener");
        //  Remove the click listener if it exists to avoid memory leaks
        if (this.deletePopupClickListener) {
            this.deletePopupClickListener();
            this.deletePopupClickListener = undefined;
            console.log("Click listener removed for delete popup");
        }
    }

    removeEditDialogClickListener() {
        console.log("Removing Edit Dialog click listener");
        //  Remove the click listener if it exists to avoid memory leaks
        if (this.editDialogClickListener) {
            this.editDialogClickListener();
            this.editDialogClickListener = undefined;
            console.log("Click listener removed for edit popup");
        }
    }

    ngOnDestroy() {
        //  Remove the click listener when the component is destroyed to avoid memory leaks
        this.removeDeletePopupClickListener();
        this.removeEditDialogClickListener();
    }

}

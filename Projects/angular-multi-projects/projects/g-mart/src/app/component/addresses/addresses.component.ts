import {Component, ElementRef, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AsyncPipe, NgFor, NgForOf, NgIf} from '@angular/common';
import {Address} from "../../shared/model/address.model";

@Component({
    selector: 'app-addresses',
    standalone: true,
    imports: [RouterLink, NgIf, NgFor, NgForOf, AsyncPipe],
    templateUrl: './addresses.component.html'
})
export class AddressesComponent implements OnDestroy {

    addressList: Address[] = [];
    private clickListener: (() => void) | undefined;
    @ViewChild('deleteAddressPopup') deleteAddressPopup!: ElementRef;

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
                    this.removeClickListener(); // Remove any existing listener
                    this.clickListener = this.renderer.listen('document', 'click', (event: Event) => {
                        const popupElement = this.deleteAddressPopup?.nativeElement;
                        if (popupElement && !popupElement.contains(event.target)) {
                            address.updateIsDeleteConfirmationPopupOpenedValue(false);
                            this.removeClickListener();
                        }
                    });
                } else {
                    // If the popup is closed, remove the click listener to avoid memory leaks
                    this.removeClickListener();
                }
            });
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

    removeClickListener() {
        //  Remove the click listener if it exists to avoid memory leaks
        if (this.clickListener) {
            this.clickListener();
            this.clickListener = undefined;
        }
    }

    ngOnDestroy() {
        //  Remove the click listener when the component is destroyed to avoid memory leaks
        this.removeClickListener();
    }

}

import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-my-account',
    standalone: true,
    imports: [NgIf],
    templateUrl: './my-account.component.html'
})
export class MyAccountComponent {

    isMyAccountPopupOpened: boolean = false;

    constructor(private router: Router) {
    }

    toggleMyAccountPopup() {
        this.isMyAccountPopupOpened = !this.isMyAccountPopupOpened;
    }

    closeMyAccountPopup() {
        this.isMyAccountPopupOpened = false;
    }

    goToMyOrders() {
        this.closeMyAccountPopup();
        this.router.navigate(['/orders']);
    }

    goToSavedAddresses() {
        this.closeMyAccountPopup();
        this.router.navigate(['/addresses']);
    }

    logout() {
        console.log("Perform logout here...");
        this.closeMyAccountPopup();
    }
}

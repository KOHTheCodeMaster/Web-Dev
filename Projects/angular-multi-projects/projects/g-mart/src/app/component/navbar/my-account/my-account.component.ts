import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgIf} from '@angular/common';
import {UserService} from "../../../service/user.service";

@Component({
    selector: 'app-my-account',
    standalone: true,
    imports: [NgIf],
    templateUrl: './my-account.component.html'
})
export class MyAccountComponent {

    isMyAccountPopupOpened: boolean = false;
    private clickListener: (() => void) | undefined;
    @ViewChild('myAccountPopup') myAccountPopup!: ElementRef;

    constructor(private router: Router,
                private renderer: Renderer2,
                private userService: UserService) {
    }

    toggleMyAccountPopup() {
        this.isMyAccountPopupOpened = !this.isMyAccountPopupOpened;

        // Handle click outside logic
        if (this.isMyAccountPopupOpened) {
            this.removeClickListener();
            this.clickListener = this.renderer.listen('document', 'click', (event: Event) => {
                const popupElement = this.myAccountPopup?.nativeElement;
                if (popupElement && !popupElement.contains(event.target)) {
                    this.updateMyAccountPopupFlag(false);
                    this.removeClickListener();
                }
            });
        } else {
            // If the popup is closed, remove the click listener to avoid memory leaks
            this.removeClickListener();
        }
    }

    updateMyAccountPopupFlag(flag: boolean = false) {
        this.isMyAccountPopupOpened = flag;
    }

    goToMyOrders() {
        this.router.navigate(['/orders']);
    }

    goToSavedAddresses() {
        this.router.navigate(['/addresses']);
    }

    logout() {
        this.toggleMyAccountPopup();
        this.userService.updateLoggedInUser(null);
        this.router.navigate(['/login']);
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

import {NgIf} from '@angular/common';
import {Component} from '@angular/core';

@Component({
    selector: 'app-options-menu-2',
    standalone: true,
    imports: [NgIf],
    templateUrl: './options-menu-2.component.html',
})
export class OptionsMenu2Component {

    optionsOpened: boolean = false;

    // Options Btn Click Listener to toggle the optionsOpened
    toggleOptionsMenu(event: MouseEvent) {
        this.optionsOpened = !this.optionsOpened;
        event.stopPropagation(); // Prevent the click event from propagating to the window
    }

}

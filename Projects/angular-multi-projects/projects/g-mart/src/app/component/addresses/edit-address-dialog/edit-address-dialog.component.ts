import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Address} from '../../../shared/model/address.model';

@Component({
    selector: 'app-edit-address-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule, NgClass],
    templateUrl: './edit-address-dialog.component.html',
})
export class EditAddressDialogComponent {

    @Input({required: true}) address!: Address;
    @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();

    constructor() {
    }

    // Emit close when clicking backdrop
    onBackdropClick(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (target.id === 'backdrop') this.closeDialog.emit();
    }

    handleSaveBtnClick() {
        // Emit save event with the updated address
        this.closeDialog.emit();
    }

}

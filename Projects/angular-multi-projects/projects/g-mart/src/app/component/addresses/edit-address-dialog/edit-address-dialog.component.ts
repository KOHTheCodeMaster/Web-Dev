import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Address} from '../../../shared/model/address.model';

@Component({
    selector: 'app-edit-address-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './edit-address-dialog.component.html',
})
export class EditAddressDialogComponent {

    @Input() address!: Address;
    @Output() close = new EventEmitter<void>();

    // Emit close when clicking backdrop
    onBackdropClick(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (target.id === 'backdrop') this.close.emit();
    }

    handleSaveBtnClick() {
        // Emit save event with the updated address
        this.close.emit();
    }

}

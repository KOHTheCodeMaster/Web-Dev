import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Address} from '../../../shared/model/address.model';
import {AddressService} from "../../../service/address.service";

@Component({
    selector: 'app-edit-address-dialog',
    standalone: true,
    imports: [CommonModule, FormsModule, NgClass],
    templateUrl: './edit-address-dialog.component.html',
})
export class EditAddressDialogComponent {

    @Input({required: true}) address!: Address | null;
    @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();
    tempAddress: Address | null = null;
    strCustomLabelInput: string = '';

    constructor(private addressService: AddressService) {
    }

    ngOnInit() {
        //  Create Deep Copy of the address object
        this.tempAddress = this.address ? this.address.clone() : null;

        //  Initialize with the custom label value of the tempAddress
        this.strCustomLabelInput = this.tempAddress?.isCustomLabel()
            ? this.tempAddress?.getLabel()
            : '';
    }

    // Emit close when clicking backdrop
    onBackdropClick(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        if (target.id === 'backdrop') {
            this.tempAddress = null;
            this.closeDialog.emit();
        }
    }

    handleSaveBtnClick() {

        //  Save tempAddress to address
        if (this.tempAddress) {
            //  Check if the label is set to custom value then update the label accordingly
            if (this.tempAddress.isCustomLabel() && this.strCustomLabelInput) this.tempAddress.setLabel(this.strCustomLabelInput);

            if (this.address) this.address.copyFrom(this.tempAddress);

            if (this.address?.getId()) this.addressService.addNewAddress(this.address);
        }

        // Emit save event with the updated address
        this.closeDialog.emit();
    }

    handleLabelBtnClick(label: string): void {
        //  Toggle the label if it is already set to the same value
        if (this.tempAddress?.getLabel() === label) label = '';

        //  Update the address label
        this.tempAddress?.setLabel(label);
    }

}

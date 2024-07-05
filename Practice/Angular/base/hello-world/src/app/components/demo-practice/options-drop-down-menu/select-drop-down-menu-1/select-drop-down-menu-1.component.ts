import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-select-drop-down-menu-1',
    standalone: true,
    imports: [NgFor, ReactiveFormsModule],
    templateUrl: './select-drop-down-menu-1.component.html',
})
export class SelectDropDownMenu1Component {

    // Step-by-step creation of form control and options
    dropdownForm = new FormGroup({
        selectedOption: new FormControl('')
    });

    // Options for the drop-down menu
    options = ['Option 1', 'Option 2', 'Option 3'];

    // Handler for form submission
    onSubmit() {
        console.log(this.dropdownForm.value);
    }
}

import {Component} from '@angular/core';

@Component({
    selector: 'app-attributes-vs-properties',
    standalone: true,
    templateUrl: './attributes-vs-properties.component.html',
})
export class AttributesVsPropertiesComponent {

    isDisabled: boolean = true;
    initialValue: string = 'Initial Value';
    dynamicClass: string = 'class1';

    toggleDisabled() {
        this.isDisabled = !this.isDisabled;
    }

    updateValue() {
        this.initialValue = 'Updated Value';
    }

    toggleClass() {
        this.dynamicClass = this.dynamicClass === 'class1' ? 'class2' : 'class1';
    }

}

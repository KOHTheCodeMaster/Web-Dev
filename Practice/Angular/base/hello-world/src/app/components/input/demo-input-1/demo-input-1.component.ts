import {booleanAttribute, Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-demo-input-1',
    standalone: true,
    imports: [FormsModule],
    template: `
        <h2>{{ '@Input Decorator Examples:' }}</h2>
        <p>Label: {{ "'" + label + "'" }}</p>
        <p>sliderValue (alias): {{ value }}</p>
        <p>Str Value: {{ strValue }}</p>
        <p>Disabled: {{ disabled }}</p>
        <p>Width: {{ widthPx }}</p>
        <input type="text" [(ngModel)]="strValue">
    `
})
export class DemoInput1Component {
    @Input({transform: trimString}) label: string = '';
    @Input({alias: 'sliderValue', required: true}) value: number = 0;
    @Input({required: true}) strValue: string = '';
    @Input({transform: booleanAttribute}) disabled: boolean = false;
    @Input({transform: appendPx}) widthPx: string = '';
}

// Helper function for trimming strings
function trimString(value: string | undefined): string {
    console.log('trimString invoked - value: ' + value)
    return value?.trim() ?? '';
}

// Helper function for appending 'px' to a number
function appendPx(value: number): string {
    return value + 'px';
}

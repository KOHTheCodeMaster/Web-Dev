import {Component} from '@angular/core';

@Component({
    selector: 'app-demo-events-1',
    standalone: true,
    templateUrl: './demo-events-1.component.html',
})
export class DemoEvents1Component {

    clickMessage: string = '';
    inputText: string = '';
    selectedOption: string = '';
    hoverMessage: string = '';
    keyMessage: string = '';

    onClick() {
        this.clickMessage = 'Button was clicked!';
    }

    onInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        this.inputText = inputElement.value;
    }

    onChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        this.selectedOption = selectElement.value;
    }

    onMouseOver() {
        this.hoverMessage = 'Mouse is over the div!';
    }

    onMouseOut() {
        this.hoverMessage = 'Mouse left the div!';
    }

    onKeyDown(event: KeyboardEvent) {
        this.keyMessage = `Key pressed: ${event.key}`;
    }

}

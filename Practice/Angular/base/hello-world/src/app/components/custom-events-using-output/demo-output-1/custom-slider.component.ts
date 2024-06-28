import {Component} from '@angular/core';
import {BaseSlider} from "./base-slider";

@Component({
    selector: 'app-custom-slider',
    standalone: true,
    template: `<input (input)="onValueChange($event)">`,
    outputs: ['valueChanged: volumeChanged']
})
export class CustomSliderComponent extends BaseSlider {

    onValueChange(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        const value = +inputElement.value || 0;
        this.valueChanged.emit(value);
    }

}

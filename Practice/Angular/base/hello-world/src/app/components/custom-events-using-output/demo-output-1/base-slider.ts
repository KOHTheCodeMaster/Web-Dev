import { EventEmitter, Output, Directive } from '@angular/core';

@Directive()
export class BaseSlider {
    @Output() valueChanged = new EventEmitter<number>();
}

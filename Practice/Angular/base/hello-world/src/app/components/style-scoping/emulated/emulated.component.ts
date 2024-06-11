import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-emulated',
    standalone: true,
    imports: [],
    templateUrl: './emulated.component.html',
    styleUrl: './emulated.component.css',
    encapsulation: ViewEncapsulation.Emulated    //  Default, can be omitted
})
export class EmulatedComponent {

}

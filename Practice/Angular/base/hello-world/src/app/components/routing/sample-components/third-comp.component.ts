import {Component} from '@angular/core';

@Component({
    selector: 'app-route-third-comp',
    standalone: true,
    imports: [],
    template: `
        <h1>Route 3 - Third-Comp</h1>
        <p>This is Third Component for Route: '/third-comp'</p>
    `
})
export class ThirdCompComponent {

}

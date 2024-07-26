import {Component} from '@angular/core';

@Component({
    selector: 'app-route-second-comp',
    standalone: true,
    imports: [],
    template: `
        <h1>Route 2 - Second-Comp</h1>
        <p>This is Second Component for Route: '/second-comp'</p>
    `
})
export class SecondCompComponent {

}

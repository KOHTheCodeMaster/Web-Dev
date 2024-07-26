import {Component} from '@angular/core';

@Component({
    selector: 'app-route-first-comp',
    standalone: true,
    imports: [],
    template: `
        <h1>Route 1 - First-Comp</h1>
        <p>This is First Component for Route: '/first-comp'</p>
    `
})
export class FirstCompComponent {

}

import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-demo-routing-plain-html',
    standalone: true,
    imports: [RouterLink, RouterOutlet],
    template: `
        <br><hr><br>
        <h1>Introduction to Angular Routing</h1>
        <p>This is a demo component to introduce Angular routing.</p>
        <br><hr><br>

        <p>Below are the links to the components:</p>
        <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="first-comp">First Component</a></li>
            <li><a routerLink="second-comp">Second Component</a></li>
            <li><a routerLink="third-comp">Third Component</a></li>
        </ul>
        <br><hr><br>

        <div>
            <p>This place will be filled with the component content.</p>
            <router-outlet></router-outlet>
        </div>
        <br><hr><br>
    `
})
export class DemoRoutingPlainHtmlComponent {

}

import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-demo-intro-to-routing',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, RouterOutlet],
    templateUrl: './demo-intro-to-routing.component.html',
    styleUrl: './demo-intro-to-routing.component.css'
})
export class DemoIntroToRoutingComponent {

}

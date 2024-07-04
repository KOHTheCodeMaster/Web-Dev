import {Component} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-demo-routing-1',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, RouterOutlet],
    templateUrl: './demo-routing-1.component.html',
    styleUrl: './demo-routing-1.component.css'
})
export class DemoRouting1Component {

}

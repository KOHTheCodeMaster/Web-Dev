import {Component} from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {TestTailwindCssComponent} from "../test-tailwind-css/test-tailwind-css.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        SidebarComponent,
        TestTailwindCssComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

}

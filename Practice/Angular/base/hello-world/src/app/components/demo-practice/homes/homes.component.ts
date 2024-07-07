import {Component} from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";

@Component({
    selector: 'app-homes',
    standalone: true,
    imports: [
        RouterModule,
        RouterLink,
        RouterOutlet,
        NavbarComponent,
        HomeComponent],
    templateUrl: './homes.component.html',
    styleUrl: './homes.component.css'
})
export class HomesComponent {
    title = 'homes';
}

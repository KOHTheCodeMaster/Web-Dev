import {Component} from '@angular/core';
import {NgIf, NgFor} from '@angular/common';

@Component({
    selector: 'app-demo-ng-if',
    standalone: true,
    imports: [NgIf, NgFor],
    templateUrl: './demo-ng-if.component.html',
    styleUrl: './demo-ng-if.component.css'
})
export class DemoNgIfComponent {
    pizza = {
        name: 'Pizza',
        isAvailable: true,
        isComingSoon: false
    };
    itemList: string[] = ['Pizza', 'Burger', 'Pasta'];
}

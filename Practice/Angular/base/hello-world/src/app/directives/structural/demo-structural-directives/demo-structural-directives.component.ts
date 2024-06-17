import {Component} from '@angular/core';
import {NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
    selector: 'app-demo-structural-directives',
    standalone: true,
    imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
    templateUrl: './demo-structural-directives.component.html',
    styleUrl: './demo-structural-directives.component.css'
})
export class DemoStructuralDirectivesComponent {
    pizza = {
        name: 'Pizza',
        isAvailable: true,
        isComingSoon: false
    };
    itemList: string[] = ['Pizza', 'Burger', 'Pasta'];
}

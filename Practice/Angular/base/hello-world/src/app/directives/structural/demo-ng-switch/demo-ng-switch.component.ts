import {Component} from '@angular/core';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
    selector: 'app-demo-ng-switch',
    standalone: true,
    imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
    templateUrl: './demo-ng-switch.component.html',
    styleUrl: './demo-ng-switch.component.css'
})
export class DemoNgSwitchComponent {

    viewMode: string | null = null;

    changeView(mode: string) {
        this.viewMode = mode;
    }

}

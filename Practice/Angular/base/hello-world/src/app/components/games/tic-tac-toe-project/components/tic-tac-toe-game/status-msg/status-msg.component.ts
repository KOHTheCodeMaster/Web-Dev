import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-status-msg',
    standalone: true,
    imports: [],
    templateUrl: './status-msg.component.html',
    styleUrl: './status-msg.component.css'
})
export class StatusMsgComponent {

    @Input() message: string;

    constructor() {
        this.message = '';
    }

}

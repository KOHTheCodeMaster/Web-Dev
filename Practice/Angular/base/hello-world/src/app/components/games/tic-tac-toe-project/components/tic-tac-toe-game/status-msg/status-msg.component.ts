import {Component, Input} from '@angular/core';
import {StatusMsgService} from "../../../services/status-msg.service";

@Component({
    selector: 'app-status-msg',
    standalone: true,
    imports: [],
    templateUrl: './status-msg.component.html',
    styleUrl: './status-msg.component.css'
})
export class StatusMsgComponent {

    @Input() message: string;

    constructor(public statusMsgService: StatusMsgService) {
        this.message = '';
    }

}

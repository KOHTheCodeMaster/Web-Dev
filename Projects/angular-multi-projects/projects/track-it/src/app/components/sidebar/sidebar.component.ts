import {Component} from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../shared/model/user.model";
import {RouterLink} from "@angular/router";
import {LabelService} from "../../service/label.service";

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

    currentUser!: User;

    constructor(private userService: UserService,
                private labelService: LabelService) {

        this.initSubscriptions();

    }

    private initSubscriptions() {

        this.userService.getCurrentUser().subscribe(user => {
            this.currentUser = user;
        });

    }

}

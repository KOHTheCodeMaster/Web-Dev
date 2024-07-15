import {Component} from '@angular/core';
import {User, UserService} from "./user.service";
import {Observable} from 'rxjs';
import {AsyncPipe, NgFor, NgIf} from '@angular/common';
import {HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-demo-async-pipe',
    standalone: true,
    imports: [NgIf, NgFor, AsyncPipe, HttpClientModule ],
    providers: [UserService, HttpClient],
    templateUrl: './demo-async-pipe.component.html',
})
export class DemoAsyncPipeComponent {

    users$: Observable<User[]>;

    constructor(private userService: UserService) {
        this.users$ = this.userService.getUsers();
    }

}

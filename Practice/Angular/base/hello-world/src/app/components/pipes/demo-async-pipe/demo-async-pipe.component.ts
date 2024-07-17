import {Component} from '@angular/core';
import {User, UserService} from "./user.service";
import {Observable, Observer, Subscription} from 'rxjs';
import {AsyncPipe, NgFor, NgIf} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
    selector: 'app-demo-async-pipe',
    standalone: true,
    imports: [NgIf, NgFor, AsyncPipe, HttpClientModule],
    providers: [UserService, HttpClient],
    templateUrl: './demo-async-pipe.component.html',
})
export class DemoAsyncPipeComponent {

    users$: Observable<User[]>;
    users2$: Observable<User[]>;
    usersList: User[] | undefined;
    subscription: Subscription | undefined;

    observer: Observer<User[]> = {
        next: (usersList: User[]) => {
            console.log('UsersList: ' + usersList);
        },
        error: (err: any) => console.log('Error: ' + err),
        complete: () => console.log('Completed.')
    };

    constructor(private userService: UserService) {

        this.users$ = this.userService.getUsers();

        this.users2$ = this.initializeUsers2Observable();
        this.subscription = this.users2$.subscribe(this.observer);

        setTimeout(() => {
            this.subscription?.unsubscribe();
        }, 5000);

    }

    initializeUsers2Observable(): Observable<User[]> {

        let usersList: User[] = [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz"
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv"
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
                "email": "Nathan@yesenia.net"
            },
            {
                "id": 4,
                "name": "Patricia Lebsack",
                "username": "Karianne",
                "email": "Julianne.OConner@kory.org"
            },
            {
                "id": 5,
                "name": "Chelsey Dietrich",
                "username": "Kamren",
                "email": "Lucio_Hettinger@annie.ca"
            },
            {
                "id": 6,
                "name": "Mrs. Dennis Schulist",
                "username": "Leopoldo_Corkery",
                "email": "Karley_Dach@jasper.info"
            },
            {
                "id": 7,
                "name": "Kurtis Weissnat",
                "username": "Elwyn.Skiles",
                "email": "Telly.Hoeger@billy.biz"
            },
            {
                "id": 8,
                "name": "Nicholas Runolfsdottir V",
                "username": "Maxime_Nienow",
                "email": "Sherwood@rosamond.me"
            },
            {
                "id": 9,
                "name": "Glenna Reichert",
                "username": "Delphine",
                "email": "Chaim_McDermott@dana.io"
            },
            {
                "id": 10,
                "name": "Clementina DuBuque",
                "username": "Moriah.Stanton",
                "email": "Rey.Padberg@karina.biz"
            }
        ];

        setTimeout(() => {
            this.usersList = usersList;
        }, 500);

        let sequenceFunction = (obs: Observer<User[]>) => {
            obs.next(usersList);
            if (!usersList) obs.error('Users List is N/A.');
            obs.complete();
        }

        return new Observable<User[]>(sequenceFunction);
    }

}

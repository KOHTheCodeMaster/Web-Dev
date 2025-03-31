import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../shared/model/User";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    currentUser$!: BehaviorSubject<User>;

    // private usersUrl: string = '/assets/users.json';
    // private http!: HttpClient;

    constructor() {
        // this.http = inject(HttpClient);
        this.currentUser$ = new BehaviorSubject<User>(this.generateGuestUser());
    }

/*
    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl);
    }
*/

    generateGuestUser(): User {
        return {id: 1001, username: 'guest', email: 'guest@abc.xyz', admin: false};
    }

    getCurrentUser(): User {
        return this.currentUser$.value;
    }

}

import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../shared/model/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private currentUser$!: BehaviorSubject<User>;

    constructor() {
        this.currentUser$ = new BehaviorSubject<User>(this.getGuestUser());
    }

    public getGuestUser(): User {
        return new User(0, 'Guest', 'guest@gmail.com', 'guest', 'GUEST');
    }

    public getCurrentUser(): Observable<User> {
        return this.currentUser$.asObservable();
    }

}

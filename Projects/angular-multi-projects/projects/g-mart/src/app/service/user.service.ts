import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {DataLoaderService} from "./data-loader.service";
import {User} from "../shared/model/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    loggedInUser$: BehaviorSubject<User | null>;
    private users: User[] = [];
    // private usersUrl: string = '/assets/json/user.json';
    // private http: HttpClient = inject(HttpClient);

    constructor(private dataLoaderService: DataLoaderService) {
        this.loggedInUser$ = new BehaviorSubject<User | null>(null);
        this.initUsers();
    }

    initUsers() {

        this.dataLoaderService.getDataLoaded$().subscribe(dataLoaded => {
            //  Initialize Users
            if (dataLoaded) {
                this.users = this.dataLoaderService.getDataList('user').map(user => new User(
                    user['id'],
                    user['username'],
                    user['password'],
                    user['email'],
                    user['isAdmin'] || false
                ));
            }
        });

    }

    getDummyUser(): User {
        return new User(1, 'john', '123', 'john@abc.xyz', false);
    }

    updateLoggedInUser(user: User | null) {
        this.loggedInUser$.next(user);
    }

    //  Getters & Setters
    //  -----------------

    getLoggedInUser$(): Observable<User | null> {
        return this.loggedInUser$.asObservable();
    }

    getLoggedInUser(): User | null {
        return this.loggedInUser$.getValue();
    }

    getUsers(): User[] {
        return this.users;
    }

}

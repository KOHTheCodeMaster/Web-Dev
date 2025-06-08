import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {DataLoaderService} from "./data-loader.service";
import {User} from "../shared/model/user.model";
import {LocalStorageService} from "./local-storage.service";
import {UserRole} from "../shared/model/user-role";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly KEY_LOGGED_IN_USER = 'LOGGED_IN_USER';
    public static GUEST_USER: User;
    private loggedInUser$: BehaviorSubject<User>;
    private users: User[] = [];

    constructor(private dataLoaderService: DataLoaderService,
                private storageService: LocalStorageService) {

        //  Initialize Guest User
        UserService.GUEST_USER = this.createGuestUser();

        // Try to load the user from storage on initialization
        this.loggedInUser$ = new BehaviorSubject<User>(this.loadUserFromStorage());
        this.initSubscriptions();
    }

    // Load user from storage using StorageService
    private loadUserFromStorage(): User {
        const userData = this.storageService.getItem<any>(this.KEY_LOGGED_IN_USER);
        if (userData) {
            return new User(
                userData.id,
                userData.username,
                userData.password,
                userData.email,
                userData.role
            );
        } else {
            //  If no user is found in storage, save and return the Guest User
            this.storageService.setItem(this.KEY_LOGGED_IN_USER, UserService.GUEST_USER);
            return UserService.GUEST_USER;
        }
    }

    initSubscriptions() {
        this.dataLoaderService.getDataLoaded$().subscribe(dataLoaded => {
            //  Initialize Users
            if (dataLoaded) {
                this.users = (this.dataLoaderService.getDataLoaded('user') as []).map(user => new User(
                    user['id'],
                    user['username'],
                    user['password'],
                    user['email'],
                    user['role']
                ));
                this.users.push(UserService.GUEST_USER);
            }
        });
    }

    createGuestUser(): User {
        return new User(1, 'guest', '', '', UserRole.GUEST);
    }

    updateLoggedInUser(user: User) {
        //  If `user` is null or undefined, set to Guest User
        // user = user || UserService.GUEST_USER;
        user = !!user ? user : UserService.GUEST_USER;

        // Update the user in the BehaviorSubject
        this.loggedInUser$.next(user);

        // Persist logged-in user to local storage
        this.storageService.setItem(this.KEY_LOGGED_IN_USER, user);
    }

    //  Getters & Setters
    //  -----------------

    getLoggedInUser$(): Observable<User> {
        return this.loggedInUser$.asObservable();
    }

    getLoggedInUser(): User {
        return this.loggedInUser$.getValue();
    }

    getUsers(): User[] {
        return this.users;
    }

}

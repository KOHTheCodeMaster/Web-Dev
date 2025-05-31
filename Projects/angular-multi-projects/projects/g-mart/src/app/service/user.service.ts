import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {DataLoaderService} from "./data-loader.service";
import {User} from "../shared/model/user";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    loggedInUser$: BehaviorSubject<User | null>;
    private loggedInAsAdmin: boolean = false;
    private users: User[] = [];
    private readonly USER_STORAGE_KEY = 'loggedInUser';

    constructor(private dataLoaderService: DataLoaderService,
                private storageService: LocalStorageService) {
        // Try to load the user from storage on initialization
        this.loggedInUser$ = new BehaviorSubject<User | null>(this.loadUserFromStorage());
        this.initSubscriptions();
    }

    // Load user from storage using StorageService
    private loadUserFromStorage(): User | null {
        const userData = this.storageService.getItem<any>(this.USER_STORAGE_KEY);
        if (userData) {
            return new User(
                userData.id,
                userData.username,
                userData.password,
                userData.email,
                userData.isAdmin || false
            );
        }
        return null;
    }

    // Save user to storage using StorageService
    private saveUserToStorage(user: User | null): void {
        if (user) {
            this.storageService.setItem(this.USER_STORAGE_KEY, user);
        } else {
            this.storageService.removeItem(this.USER_STORAGE_KEY);
        }
    }

    initSubscriptions() {
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

        this.loggedInUser$.subscribe(user => this.loggedInAsAdmin = user ? user.getIsAdmin() : false);
    }

    getDummyUser(): User {
        return new User(1, 'john', '123', 'john@abc.xyz', false);
    }

    updateLoggedInUser(user: User | null) {
        // Update the user in the BehaviorSubject
        this.loggedInUser$.next(user);

        // Persist using the StorageService
        this.saveUserToStorage(user);
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

    isLoggedInAsAdmin(): boolean {
        return this.loggedInAsAdmin;
    }

}

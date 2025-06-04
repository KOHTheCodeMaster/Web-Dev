import {Injectable} from '@angular/core';
import {User} from "../shared/model/user.model";
import {UserService} from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private userService: UserService) {
    }

    async login(username: string, password: string): Promise<boolean> {
        return await this.authenticate(username, password);
    }

    async authenticate(username: string, password: string): Promise<boolean> {
        let isAuthenticated = false;

        let users: User[] = this.userService.getUsers();
        for (let user of users) {
            if (user.getUsername() === username && user.getPassword() === password) {
                this.userService.updateLoggedInUser(user);
                console.log('authenticated - user:', user);
                isAuthenticated = true;
                break;
            }
        }

        if (!isAuthenticated) this.userService.updateLoggedInUser(UserService.GUEST_USER);
        return isAuthenticated;
    }

}

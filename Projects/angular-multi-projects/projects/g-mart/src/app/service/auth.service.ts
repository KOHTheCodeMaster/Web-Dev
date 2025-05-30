import {Injectable} from '@angular/core';
import {User} from "../shared/model/User";
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
                isAuthenticated = true;
                break;
            }
        }

        if (!isAuthenticated) this.userService.updateLoggedInUser(null);
        return isAuthenticated;
    }

}

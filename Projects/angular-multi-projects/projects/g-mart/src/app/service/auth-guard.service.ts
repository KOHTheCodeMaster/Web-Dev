import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "../shared/model/user";

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private userService: UserService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLoggedInUser(state.url);
    }

    checkLoggedInUser(postLoginUrl: string): boolean {
        let isAuthenticated = false;
        let loggedInUser: User | null = this.userService.getLoggedInUser();

        if (loggedInUser !== null) {
            isAuthenticated = true;

            //  If the user is logged in, redirect to the /admin
            if (loggedInUser.getIsAdmin()) this.router.navigateByUrl('/admin');

        } else {
            // this.userService.updateLoggedInUser(null); // Ensure logged-in user is set to null

            // Store the postLoginUrl in the local storage
            localStorage.setItem('postLoginUrl', postLoginUrl);
            console.log('Post-login URL stored: ' + postLoginUrl);

            //  Redirect to login page
            this.router.navigateByUrl('/login');
            console.warn(`Access denied. Please log in to continue. Redirecting to login page...`);
        }

        return isAuthenticated;
    }

}

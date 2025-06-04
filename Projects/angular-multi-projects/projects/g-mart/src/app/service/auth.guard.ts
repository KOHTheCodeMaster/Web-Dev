import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "../shared/model/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLoggedInUser(state.url);
    }

    checkLoggedInUser(postLoginUrl: string): boolean {
        let isAuthenticated = false;
        let loggedInUser: User = this.userService.getLoggedInUser();

        if (loggedInUser.isGuest()) {
            // Store the postLoginUrl in the local storage
            localStorage.setItem('postLoginUrl', postLoginUrl);
            console.log('Post-login URL stored: ' + postLoginUrl);

            //  Redirect to login page
            this.router.navigateByUrl('/login');
            console.warn(`Access denied. Please log in to continue. Redirecting to login page...`);
        } else {
            //  User is logged in, update the isAuthenticated flag
            isAuthenticated = true;

            //  If the logged-in user is an admin, redirect to the admin dashboard
            if (loggedInUser.isAdmin()) this.router.navigateByUrl('/admin');
        }

        return isAuthenticated;
    }

}

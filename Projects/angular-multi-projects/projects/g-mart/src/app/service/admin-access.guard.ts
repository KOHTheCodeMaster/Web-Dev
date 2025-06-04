import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "../shared/model/user.model";

@Injectable({
    providedIn: 'root'
})
export class AdminAccessGuard implements CanActivate {

    constructor(private userService: UserService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let loggedInUser: User = this.userService.getLoggedInUser();

        if (loggedInUser.isGuest()) {
            //  If the user is not logged in, redirect to the login page
            console.warn('Access denied. User is not logged in. Redirecting to login page...');
            this.router.navigateByUrl('/login');
        } else if (!loggedInUser.isAdmin()) {
            //  If the user is logged in but not authorized as admin, redirect to home page
            console.warn('Access denied. Logged-In User is not authorized as admin. Redirecting to home page...');
            this.router.navigateByUrl('/');
        }

        return loggedInUser.isAdmin();
    }

}

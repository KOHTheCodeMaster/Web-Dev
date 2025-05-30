import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "../shared/model/user";

@Injectable({
    providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

    constructor(private userService: UserService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let loggedInUser: User | null = this.userService.getLoggedInUser();
        let isAuthorizedAsAdmin = !!loggedInUser && loggedInUser.getIsAdmin();

        // If the user is not authorized as admin, redirect to the login page
        if (!isAuthorizedAsAdmin) {
            console.warn(`Access denied. Admin privileges required. Redirecting to login page...`);
            this.router.navigateByUrl('/login');
        }

        return isAuthorizedAsAdmin;
    }

}

import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AdminRedirectGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(): boolean {
        const loggedInUser = this.userService.getLoggedInUser();

        // If user is admin, redirect to admin dashboard
        if (loggedInUser && loggedInUser.getIsAdmin()) {
            this.router.navigateByUrl('/admin');
            return false; // Prevents navigation to the original route
        }

        // Otherwise allow navigation to proceed
        return true;
    }

}

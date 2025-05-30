import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf,} from "@angular/common";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [NgIf, FormsModule],
    templateUrl: './login.component.html'
})
export class LoginComponent {

    username: string = '';
    password: string = '';
    loginError: string = '';
    isLoggedIn: boolean = false;

    constructor(public router: Router,
                public route: ActivatedRoute,
                public userService: UserService,
                public authService: AuthService) {
        this.initSubscriptions();
    }

    initSubscriptions() {
        this.userService.getLoggedInUser$().subscribe(loggedInUser => this.isLoggedIn = !!loggedInUser);
    }

    handleLogin() {
        this.loginError = '';
        this.authService.login(this.username, this.password)
            .then(success => {
                if (success) {
                    let postLoginUrl = localStorage.getItem("postLoginUrl");
                    this.router.navigate([postLoginUrl ? postLoginUrl : '/']);  //  Navigate to postLoginUrl or default to home
                    localStorage.setItem("postLoginUrl", '/');     //  Reset postLoginUrl after successful login
                } else this.loginError = 'Invalid username or password.';
            });
    }

    handleLogout() {
        this.userService.updateLoggedInUser(null);
        this.username = '';
        this.password = '';
    }

}

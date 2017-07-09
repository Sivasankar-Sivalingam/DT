import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({

    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public user: any = { username: '', password: '' };
    public validUser: boolean;
    constructor(
        private router: Router,
        private login: LoginService ){
        this.validUser = true;
        }

    loginUser(user){
        const userName = user.username;
        const password = user.password;
        const tempName = 'admin';
        const tempPwd = 'admin';
        if ((userName === tempName && password === tempPwd) || (userName === '853364' && password === 'delta1152')){
            this.login.setUserLoggedIn();
            this.login.getUserName(userName);
            this.validUser = true;
            this.router.navigate(['Tracker']);
        }else {
            this.validUser = false;
        }
    }
}

import { Component } from '@angular/core';
import { CookieManager } from '../../services/cookie.service'
import { Router } from '@angular/router';

@Component({

    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public user: any = { username: "", password: "" };
    public validUser: boolean;
    constructor(private router:Router){
        this.validUser = true;
        }

    loginUser(user){
        var userName:string = user.username;
        var password:string = user.password;
        var tempName:string = 'admin';
        var tempPwd:string = 'admin';
        if(userName === tempName && password === tempPwd){
            this.validUser = true;
            this.router.navigate(['Tracker']);
        }else{
            this.validUser = false;
        }
    }
}

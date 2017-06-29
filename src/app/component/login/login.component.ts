import { Component } from '@angular/core';
import { CookieManager } from '../../services/cookie.service'
import { Router } from '@angular/router'

@Component({

    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']



})
export class LoginComponent {
    public user: any = { username: "", password: "" };
}

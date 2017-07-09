import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({

    selector: 'app-tracker',
    templateUrl: './tracker.component.html',
    styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit{
    public userName = this.login.username;;
   ngOnInit() {
    }
    constructor(private login: LoginService){
    }
}
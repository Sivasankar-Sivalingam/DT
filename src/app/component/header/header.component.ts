import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title = "Deployment Tracker";
    codeOneLogo: string;

  constructor() {
    this.codeOneLogo = '/assets/images/delta.png';
  }

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    twitterLogo: string;
    facebookLogo: string;
    googleLogo: string;
    outlookLogo: string;
    dvlLink: string;
    qatLink: string;
    stgLink: string;
    prodLink: string;

  constructor() {
    this.twitterLogo = '/assets/images/twitter.png';
    this.facebookLogo = '/assets/images/facebook.png';
    this.googleLogo = '/assets/images/google.png';
    this.outlookLogo = '/assets/images/outlook.png';
    this.dvlLink = 'https://dvl12.delta.com/';
    this.qatLink = 'https://qat7.delta.com/';
    this.stgLink = 'https://stg.virginatlantic.com/';
    this.prodLink = 'https://www.virginatlantic.com';
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private isUserLoggedIn;
  public username;

  constructor() {
    this.isUserLoggedIn = false;
   }

   setUserLoggedIn(){
     this.isUserLoggedIn  = true;
   }
   getUserName(userName){
     console.log(userName);
     this.username = userName;
     return this.username;
   }
   getUserLoggedIn(){
     return this.isUserLoggedIn;
   }
}

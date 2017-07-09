import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor( private login: LoginService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.login.getUserLoggedIn()) {
      this.router.navigate(['/Login']);
      return false;
    }
    return true;
  }
}

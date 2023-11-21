import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AccountService } from '../../Account/account.service';


@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
  isFakeAuthenticate: boolean = true;
  constructor(
    private router: Router,private accountService:AccountService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    //if is authenticated(from a service) return true  else false
    //return this.isFakeAuthenticate;

    
    if (this.accountService.isUserLoginAccordingToLocalStorage()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }


  }
}

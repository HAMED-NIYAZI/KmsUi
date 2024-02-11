import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AccountService } from '../../Account/account.service';


@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
  isFakeAuthenticate: boolean = true;
  constructor(
    private router: Router, private accountService: AccountService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    //if is authenticated(from a service) return true  else false
    //return this.isFakeAuthenticate;
    var flag = false;

    // if (this.accountService.isUserLoginAccordingToLocalStorage()) {
    // return true;
    // } else {
    //   this.router.navigate(['/login']);
    //   return false;
    // }


    if (this.accountService.isUserLoginAccordingToLocalStorage()) flag = true;



    var  clientTime:string = this.accountService.getClientLoginTime();
    if (clientTime) {
      const now = new Date();
      var res=this.isWithinSixtyMinutes( new Date(clientTime));
      flag=res;
    }else{
      flag=false;
    }


    if (flag == false) {
      localStorage.clear();
      this.router.navigate(['/login']);
      return false;
    }

    return true;



  }

  isWithinSixtyMinutes(loginTimeDate: Date): boolean {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - loginTimeDate.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 *  60));
  
    const res=diffInMinutes <  60;
    if(res)
    this.accountService.saveClientLoginTime();

    return res;
  }

  
}

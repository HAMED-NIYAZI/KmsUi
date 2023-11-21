import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  isUserLoginAccordingToLocalStorage(): boolean {
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('userid');

    if (userid == '' || userid?.length != 36 || userid == null || userid == undefined ||
      token == '' || token == null || token == undefined) {
      localStorage.clear();
      return false;
    }

    return true;
  }
}

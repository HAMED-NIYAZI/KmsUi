import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiUrl = environment.apiUrl;
  private readonly default_headers: any = { 'accept': '*/*', 'Content-Type': 'application/json' };

  constructor(private http: HttpClient) { }

  isUserLoginAccordingToLocalStorage(): boolean {
    const token = localStorage.getItem('token');
    //  const clientinfo = localStorage.getItem('client-info');

    if (/*clientinfo == '' || clientinfo == null || clientinfo == undefined ||*/
      token == '' || token == null || token == undefined) {
      localStorage.clear();
      return false;
    }
    return true;
  }


  saveHomePageSettingsInfo(homePageSettingsInfo: any) {

    localStorage.setItem('home-page-settings-Info', JSON.stringify(homePageSettingsInfo));
  }

  saveClientToken(clientinfo: any) {
    localStorage.setItem('token', clientinfo.token);
  }

  saveClientLoginTime() {
    const date=(new Date()).toString();
    localStorage.setItem('login-time', date);
  }

  // getClientLoginTime():string {
  //  return (localStorage.getItem('login-time')==null || localStorage.getItem('login-time')=='') ? localStorage.getItem('login-time') : '';
  // }

  getClientLoginTime(): string {
    const loginTime = localStorage.getItem('login-time');
    return loginTime !== null && loginTime !== '' ? loginTime : '';
  }

  

  saveClientInfo(clientinfo: any) {
    localStorage.setItem('client-info', JSON.stringify(clientinfo));
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  clearLocalStorage_TokenAndUserInfo() {
    localStorage.removeItem('client-info');
    localStorage.removeItem('token');
  }

  getClientInfoFromLocalStorage(): any {
    return localStorage.getItem('client-info');
  }



  Login(model: any): Observable<any> {
    const headers = this.default_headers;
    const body = JSON.stringify(model);

    return this.http.post<any>(this.apiUrl + 'Account/Login', body, { 'headers': headers });
  }
  logOut(){
  this.clearLocalStorage();
}


  get_User_FullName() {
    const info = this.get_ClientInfo();
    const info1: string = info.firstName + ' ' + info.lastName;
    return info1
  }

  get_User_ImagePath() {
    const info = this.get_ClientInfo();
    const info1: string = info.imagePath;
    return info1
  }

  get_ClientInfo() {
    return JSON.parse(localStorage.getItem('client-info') || '{}');
  }

  get_HomePage_title() {
    const info = this.get_HomePageSetting();
    const info1: string = info.title;
    return info1
  }

  get_HomePage_ImagePath() {
    const info = this.get_HomePageSetting();
    const info1: string = info.imagePath;
    return info1
  }
  get_HomePageSetting() {
    return JSON.parse(localStorage.getItem('home-page-settings-Info') || '{}');
  }

  get_Bearer_Token() {
    const token = 'Bearer ' + localStorage.getItem('token');
    return token;
  }

  get_User_Id() {
    const info = this.get_ClientInfo();
    const info1: string = info.userId;
    return info1
  }

}

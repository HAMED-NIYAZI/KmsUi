import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiUrl=environment.apiUrl;
  private readonly default_headers: any = { 'accept': '*/*', 'Content-Type': 'application/json' };



  constructor(private http: HttpClient) { }

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

Login(model:any):any{
  this.http.post(this.apiUrl+'Home/GetLoginPageSetting', model);
}


login(model: any): Observable<any> {
  const headers = this.default_headers;
  const body = JSON.stringify(model);
  
  return this.http.post<any>(this.apiUrl + 'Home/GetLoginPageSetting', body, { 'headers': headers });
}



}

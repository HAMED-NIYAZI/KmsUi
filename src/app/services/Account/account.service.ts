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
    const clientinfo = localStorage.getItem('client-info');

    if (clientinfo == '' ||  clientinfo == null || clientinfo == undefined ||
      token == '' || token == null || token == undefined) {
      localStorage.clear();
      return false;
    }
    return true;
  }
 
  saveClientToken(clientinfo: any) {
    localStorage.setItem('token', clientinfo.token);
  }

  saveClientInfo(clientinfo: any) {
    localStorage.setItem('client-info', clientinfo);
  }

  clearLocalStorage() {
    localStorage.clear();
  }

Login(model: any): Observable<any> {
  const headers = this.default_headers;
  const body = JSON.stringify(model);
  
  return this.http.post<any>(this.apiUrl + 'Account/Login', body, { 'headers': headers });
}


}

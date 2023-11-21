import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginPageSettingService {
apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

getLoginPageSetting():Observable<any>{

return this.http.get<any>(this.apiUrl+'Home/GetLoginPageSetting');

}

}

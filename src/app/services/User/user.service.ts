import { AccountService } from 'src/app/services/Account/account.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl;

  constructor(private accountService: AccountService ,private http:HttpClient) { }

  GetUser(Id : string) :Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.accountService.get_Bearer_Token()
    });
      return this.http.post<any>(this.apiUrl + 'User/GetById?id='+Id, { headers: headers });
    
  }
}

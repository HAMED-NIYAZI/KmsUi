import { AccountService } from 'src/app/services/Account/account.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
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
 

    debugger;

      return this.http.post<any>(this.apiUrl + 'User/GetById?id='+Id, {}, { headers: headers });
    
  }


  

ChangePasswordByUser(model: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.accountService.get_Bearer_Token()
  });
    const body = JSON.stringify(model);

  return this.http.post<any>(this.apiUrl + 'User/ChangePasswordByUser', body, { headers: headers });
}

EditUserProfile(model: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.accountService.get_Bearer_Token()
  });
    const body = JSON.stringify(model);

  return this.http.post<any>(this.apiUrl + 'User/EditUserProfile', body, { headers: headers });
}


uploadAvatarImage12(file: File,id :string): Observable<any> {
  debugger;
  const headers = new HttpHeaders({
   'Content-Type': 'multipart/form-data',
    'Authorization': this.accountService.get_Bearer_Token()
  });
  const formData: FormData = new FormData();
  formData.append('file', file, file.name);
  formData.append('id', id);

  debugger;

  return this.http.post(this.apiUrl + 'User/EditUserProfileImage?id='+id, formData,{ headers: headers });
 
}

uploadAvatarImage(file: File, userId: string):Observable<any> {
  const formData: FormData = new FormData();
  formData.append('file', file, file.name);
  return this.http.post(`${this.apiUrl}User/EditUserProfileImage?Id=${userId}`, formData);
}



}

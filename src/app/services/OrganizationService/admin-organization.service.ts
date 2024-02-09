import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminOrganizationService implements OnInit {
  //readonly ApiUrl=`${}`;
  readonly ApiUrl = 'https://localhost:7163/api/Organization';

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }
  //return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)

  Save(model: any): any {
 
    this.http.post(this.ApiUrl, model).subscribe(res => {
      if(res==true) {console.log(true);return true;}
      if(res==false) {console.log(false);return false;}
      console.log(true);return false;
           });
 
this.http.post(this.ApiUrl, model);

}

}

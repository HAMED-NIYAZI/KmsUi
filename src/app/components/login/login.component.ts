import { LoginPageSettingService } from './../../services/HomePageSettings/login-page-setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginPageModel:any;
  constructor(private loginPageSettingService: LoginPageSettingService) { }

  ngOnInit(): void {
 
    this.loginPageSettingService.getLoginPageSetting().subscribe(res => {
      if (res.data != null || res.statusCode == 200) {
        this.loginPageModel=res.data;
      }
     },err=>{
      alert(err.message);

    });
  }

}

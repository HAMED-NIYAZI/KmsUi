//import { ToastrService } from 'ngx-toastr';
import { LoginPageSettingService } from './../../services/HomePageSettings/login-page-setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPageModel: any;


  constructor(private loginPageSettingService: LoginPageSettingService) { }

  ngOnInit(): void {

    this.loginPageSettingService.getLoginPageSetting().subscribe(res => {

      //    ok
      if (res.result == 0 || res.data != null) {
        this.loginPageModel = res.data;
      }

      //    not ok
      if (res.result != 0) {
        ///this.toastr.success('سرور در دسترس نیست','خطا');
        // دیتای پیش فرض لود شود
      }


    }, err => {
      if (err.status == 0 && err.statusText == "Unknown Error") {
        ///this.toastr.success('سرور در دسترس نیست','خطا');
      }
    });
  }



 
}

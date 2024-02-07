//import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginPageSettingService } from './../../services/HomePageSettings/login-page-setting.service';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/Account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPageModel: any;
  loginForm!: FormGroup;


  constructor(private loginPageSettingService: LoginPageSettingService,private accountService: AccountService) { }

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

    this.loginForm = new FormGroup({
      emailAddress: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),

    });

  }

  // Login():any{
  //   this.accountService.login(this.loginForm.value).subscribe(data => {}
  // }


}

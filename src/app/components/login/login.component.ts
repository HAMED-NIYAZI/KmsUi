 //import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginPageSettingService } from './../../services/HomePageSettings/login-page-setting.service';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/Account/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPageModel: any;
  loginForm!: FormGroup;
  apiUrlImage = environment.apiUrlImage;


  constructor(private loginPageSettingService: LoginPageSettingService, private accountService: AccountService, private router: Router,
    private toastr: ToastrService) {

    this.accountService.clearLocalStorage();
  }

  ngOnInit(): void {

    this.loginPageSettingService.getLoginPageSetting().subscribe(res => {

      //    ok
      if (res.result == 0 || res.data != null) {
        this.loginPageModel = res.data;
        this.accountService.saveHomePageSettingsInfo(res.data);
        }

      //    not ok
      if (res.result != 0) {
        ///this.toastr.success('سرور در دسترس نیست','خطا');
        // دیتای پیش فرض لود شود
        this.toastr.error('سرور در دسترس نیست', '');
      }


    }, err => {
      if (err.status == 0 && err.statusText == "Unknown Error") {
        this.toastr.error('سرور در دسترس نیست', '');
      }
    });

    this.loginForm = new FormGroup({
      UserName: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^([0-9]){10}$")]),
      Password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });

  }

  // Login():any{
  //   this.accountService.login(this.loginForm.value).subscribe(data => {}
  // }

  Login(): any {
    debugger;
    this.accountService.Login(this.loginForm.value).subscribe((res: {
      data: string;
      result: number; status: number;
    }): void => {
      if (res.result == 0) {
        this.accountService.clearLocalStorage_TokenAndUserInfo();

        this.accountService.saveClientInfo(res.data);
        this.accountService.saveClientToken(res.data);
  
        this.router.navigate([''])
        this.toastr.success('ورود موفق به سامانه', '');
        //Success
        return;
      }

      if (res.result == 1) {

        //failed
        return;
      }

      if (res.result == 3) {
        //ServerError
        return;
      }

      if (res.result == 4) {
        //ExeptionError
        return;
      }


      if (res.result == 5) {
        //NotFound
        this.toastr.error('       نام کاربری و یا کلمه عبور اشتباه می باشد      ', '     ');

        return;
      }

    }, (error: any) => {




    });

  }


}


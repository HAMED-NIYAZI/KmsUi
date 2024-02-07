//import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginPageSettingService } from './../../services/HomePageSettings/login-page-setting.service';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/Account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPageModel: any;
  loginForm!: FormGroup;


  constructor(private loginPageSettingService: LoginPageSettingService, private accountService: AccountService, private router: Router) { }

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
      UserName: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^([0-9]){10}$")]),
      Password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });

  }

  // Login():any{
  //   this.accountService.login(this.loginForm.value).subscribe(data => {}
  // }

  Login(): any {

    this.accountService.Login(this.loginForm.value).subscribe((res: {
      data: string;
      result: number; status: number;
    }): void => {
 debugger;
      if (res.result == 0) {
        this.accountService.clearLocalStorage();
        
        this.accountService.saveClientInfo(res.data);
        this.accountService.saveClientToken(res.data);

        this.router.navigate(['/home'])
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
        return;
      }

    }, (error: any) => {

 


    });

  }


}


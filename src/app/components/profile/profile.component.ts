import { ToastrService } from 'ngx-toastr';
 import { AccountService } from 'src/app/services/Account/account.service';
import { UserService } from './../../services/User/user.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
 UserProfileModel:any;
 apiUrlImage = environment.apiUrlImage;

 
  constructor(private userService:UserService ,private accountService:AccountService,private toastr :ToastrService) {

  }
  ngOnInit(): void {

    this.userService.GetUser(this.accountService.get_User_Id()).subscribe(res => {
 
      //    ok
      if (res.result == 0 || res.data != null) {
        this.UserProfileModel = res.data;
         }

      //    not ok
      if (res.result != 0) {
        this.toastr.error('خطا در دریافت اطلاعات', '');
      }


    }, err => {
      if (err.status == 0 && err.statusText == "Unknown Error") {
        this.toastr.error('سرور در دسترس نیست', '');
      }
      this.toastr.error(err, '');

    });


  }

}


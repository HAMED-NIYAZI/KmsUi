import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/Account/account.service';
import { UserService } from './../../services/User/user.service';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  UserProfileModel: any;
  apiUrlImage = environment.apiUrlImage;
  ProfileForm!: FormGroup;
  ProfileChangePasswordByUserForm!: FormGroup;
  @ViewChild('fileInput') fileInput!: ElementRef;


  constructor(private userService: UserService, private accountService: AccountService, private toastr: ToastrService/*, private cdRef: ChangeDetectorRef*/) {

  }
  ngOnInit(): void {

    try {
      this.userService.GetUser(this.accountService.get_User_Id()).subscribe(res => {
        debugger;
  
        //    ok
        if (res.result == 0 || res.data != null) {
          debugger;
  
          this.UserProfileModel = res.data;
  
  
          this.ProfileForm = new FormGroup({
            Id: new FormControl(this.accountService.get_User_Id(), [Validators.required, Validators.minLength(36), Validators.maxLength(36),]),
            FirstName: new FormControl(res.data.firstName, [Validators.required, Validators.minLength(1), Validators.maxLength(50),]),
            LastName: new FormControl(res.data.lastName, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
            Email: new FormControl(res.data.email, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
            Phone: new FormControl(res.data.phone, [Validators.required, Validators.minLength(1), Validators.maxLength(13)]),
            Address: new FormControl(res.data.address, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
            About: new FormControl(res.data.about, [Validators.required, Validators.minLength(1), Validators.maxLength(4000)]),
          });
  
          this.ProfileChangePasswordByUserForm = new FormGroup({
            OldPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20),]),
            NewPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
            ConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
            Id: new FormControl(this.accountService.get_User_Id(), [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
   
          });
  
  
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
  
    } catch (error) {
      this.toastr.success('error');
    }



    //this.cdRef.detectChanges(); // Manually trigger change detection



  }




  ChangePasswordByUser(): any {

    //validation


    this.userService.ChangePasswordByUser(this.ProfileChangePasswordByUserForm.value).subscribe((res: {
      data: string;
      result: number; status: number;
    }): void => {
       if (res.result == 0) {
        this.toastr.success('کلمه عبور با موفقیت تغییر یافت');

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
        this.toastr.error('     ', '     ');

        return;
      }

    }, (error: any) => {
      //-----
    });

  }

  EditUserProfile(): any {

    //validation
    debugger;


    this.userService.EditUserProfile(this.ProfileForm.value).subscribe((res: {
      data: string;
      result: number; status: number;
    }): void => {
      debugger;
      if (res.result == 0) {
        this.UserProfileModel = res.data;
        this.toastr.success(' عملیات با موفقیت انجام شد. ');

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
        this.toastr.error('     ', '     ');

        return;
      }

    }, (error: any) => {
      //-----
    });

  }
 

  uploadAvatarImage(event: any){


    const file: File = event.target.files[0];
    if (file) {

    this.userService.uploadAvatarImage(file,this.accountService.get_User_Id()).subscribe((res: {
      data: string;
      result: number; status: number;
    }): void => {
      debugger;
      if (res.result == 0) {
        
        this.toastr.success(' عملیات با موفقیت انجام شد. ');

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
        this.toastr.error('     ', '     ');

        return;
      }

    }, (error: any) => {
      //-----
    });
    }
  }

  triggerFileInputClick(event: Event) {
    event.preventDefault(); // Prevent the default action of the <a> tag
    this.fileInput.nativeElement.click(); // Trigger the click event of the hidden file input
  }


}


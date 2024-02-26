import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/Account/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarvariable = new EventEmitter();
  apiUrlImage = environment.apiUrlImage;

  UserImage: string = "";
  UserOrganizationName:string="";


  constructor(private accountService: AccountService, private router: Router,private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.accountService.userImage.subscribe(userImage => {
      this.UserImage = userImage;
    });

   // this.UserImage =this.accountService.get_User_ImagePath()? this.apiUrlImage + this.accountService.get_User_ImagePath(): '' ;
    this.UserImage =this.UserImage ? this.apiUrlImage + this.UserImage : '' ;
    this.UserOrganizationName=this.accountService.get_HomePage_title();
    this.cdRef.detectChanges(); // Manually trigger change detection

  }
  toggleSidebar() {
    this.toggleSidebarvariable.emit();
  }


  Logout() {
    this.accountService.logOut();
    this.router.navigate(['/login']);
  }



}


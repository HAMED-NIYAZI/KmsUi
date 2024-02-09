import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
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


  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.UserImage = this.apiUrlImage + this.accountService.get_User_ImagePath();
    this.UserOrganizationName=this.accountService.get_HomePage_title();

  }
  toggleSidebar() {
    this.toggleSidebarvariable.emit();
  }


  Logout() {
    this.accountService.clearLocalStorage();
    this.router.navigate(['/login']);
  }



}


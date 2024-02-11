import { ChangeDetectorRef, Component, DebugElement, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/Account/account.service';
  import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  expandedItemIndex: number | null = null;
  apiUrlImage = environment.apiUrlImage;

UserFullName:string="";
UserOrganizationName:string="";
UserImage:string="";
HomePageSettingImage:string="";


 

  constructor(private accountService:AccountService,private cdRef: ChangeDetectorRef ) {
 

   }

  ngOnInit(): void {
  this.UserFullName=this.accountService.get_User_FullName();
 
this.UserOrganizationName=this.accountService.get_HomePage_title();
this.UserImage=this.accountService.get_User_ImagePath() ?  this.apiUrlImage +this.accountService.get_User_ImagePath() : '';
this.HomePageSettingImage=this.accountService.get_HomePage_ImagePath();
 this.HomePageSettingImage=this.HomePageSettingImage=='' ? '': this.apiUrlImage+this.HomePageSettingImage;
 this.cdRef.detectChanges(); // Manually trigger change detection

  }
 

show(){
console.log(this.accountService.get_User_ImagePath());
  alert(this.accountService.get_User_ImagePath());
}

show2(){
  console.log(localStorage.getItem('client-info'));
    alert(localStorage.getItem('client-info'));
     
  }
  


//for toggle sidebar menu - works with dom
  toggleExpanded(event: MouseEvent, itemIndex: number): void {
    if (this.expandedItemIndex === itemIndex) {
      // If the clicked item is already expanded, collapse it
      this.expandedItemIndex = null;
    } else {
      // Otherwise, expand the clicked item and collapse others
      this.expandedItemIndex = itemIndex;
    }
  }


}

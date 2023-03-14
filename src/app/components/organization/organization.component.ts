import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AdminOrganizationService } from 'src/app/services/OrganizationService/admin-organization.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {
  OrganizationForm!: FormGroup;

  constructor(private service: AdminOrganizationService) {

  }


  ngOnInit(): void {
    this.OrganizationForm = new FormGroup({
      PersianTitle: new FormControl(),
      ParentId: new FormControl(),
      SortingNumber: new FormControl('0'),
    });

  }

  SaveOrganizationForm():any {
    //console.log(this.OrganizationForm.value);
    debugger;
    
  const res = this.service.Save(this.OrganizationForm.value);
    // const result = this.service.Save(this.OrganizationForm.value).subscribe((res: boolean) => {
    //   if(res==true) {console.log(true);return true;}
    //   if(res==false) {console.log(false);return false;}
    //   return false;
    //        });

    debugger;

   if (res == true) alert("عملیات با موفقیت ثبت شد.");
    else alert("خطا در ثبت عملیات");

  }

  CleanForm() {
    let x = this.OrganizationForm;
  }

  getId(Id: string) {
    this.OrganizationForm.get('ParentId')?.setValue(Id);
  }

}

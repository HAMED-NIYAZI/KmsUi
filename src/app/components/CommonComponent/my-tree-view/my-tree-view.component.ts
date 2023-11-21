import { CdkStepperModule } from '@angular/cdk/stepper';
import { IfStmt } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MyTreeViewModel } from 'src/app/Models/MyTreeViewModel';

@Component({
  selector: 'app-my-tree-view',
  templateUrl: './my-tree-view.component.html',
  styleUrls: ['./my-tree-view.component.css']
})
  
 

 

export class MyTreeViewComponent implements OnInit {
  // @Input() tree:Array<TreeClass>;
  @Input() isMultiSelectable!: boolean;

  @Output() ids = new EventEmitter();
  @Output() id =new EventEmitter();

  tree: Array<MyTreeViewModel> = this.GetData();
  SelectedList: Array<MyTreeViewModel> = [];
  AllIds: Array<string> = [];
  ngClassParent: string = "parent";
  ngClassParentDown: string = "parent-down";

  constructor() {
    console.log("constructor");
    this.isMultiSelectable == false

    if (this.isMultiSelectable == false) {
      this.ClearChecks();
    }



  }

  ngOnInit(): void {
    console.log("ngOnInit");
     this.ClearChecks();
     this.ngAfterContentInit();

  }


  ngAfterContentInit(){
    console.log("ngAfterContentInit");
        this.GetData();
      }

      
  GetData():any{
    console.log("GetData");
    this.tree = [
      new MyTreeViewModel("حراست", "2AA4696D-4403-4403-4403-01881BB815B6", false,
        [
          new MyTreeViewModel("نگهبانی", "2AA4696D-4403-4403-4403-01881BB815B6", false, []),
          new MyTreeViewModel("اداری", "2AA4696D-4403-4403-4403-01881BB815B6", false, []),
          new MyTreeViewModel("مراقبت", "2AA4696D-4403-4403-4403-01881BB815B6", false, []),
          new MyTreeViewModel(" با شرایط و ضوابط موافقم و آن را می پذیرم اطلاعات", "2AA4696D-4403-4403-4403-01881BB815B6", false,
            [
              new MyTreeViewModel("با شرایط و ضوابط موافقم و آن را می پذیرم اداری", "2AA4696D-4403-4403-4403-01881BB815B6", false, []),
              new MyTreeViewModel("نیروی انسانی", "2AA4696D-4403-4403-4403-01881BB815B6", false, []),
              new MyTreeViewModel("برنامه ریزی", "2AA4696D-4403-4403-4403-01881BB815B6", false, []),
            ]),
        ]),

      new MyTreeViewModel("مالی", "2AA4696D-4403-4403-4403-01881BB815B6", false, []),
      new MyTreeViewModel("بهره برداری", "2AA4696D-4403-4403-4403-01881BB815B6", false, [])



    ];
  }


  //for style   slip down and up
  ClickOnParent(event: any) {
    if (event.srcElement.classList[0] == "parent") {
      event.srcElement.classList.remove("parent");
      event.srcElement.classList.add("parent-down");
      event.srcElement.nextElementSibling.classList.add("active");
    } else if (event.srcElement.classList[0] == "parent-down") {
      event.srcElement.classList.remove("parent-down");
      event.srcElement.classList.add("parent");
      event.srcElement.nextElementSibling.classList.remove("active");
    }
  }

  OnChange(id: string): void {
     if (this.isMultiSelectable == false) {
      this.ClearChecksExeptThisId(id);
      this.returnId();//call emmiter for parent

    } else if (this.isMultiSelectable == true) {
      let find = this.SelectedList.find(obj => obj.id == id);
      if (find == null) {
        //  let findNew=this.tree.find(t => t.id == id) as MyTreeViewModel
        let findNew = this.FindInTree2(this.tree, id) as MyTreeViewModel
        if (findNew != null)
          this.SelectedList.push(findNew);
      }
      else {
        this.SelectedList = this.SelectedList.filter(obj => obj.id !== id);
      }

      this.returnIds();//call emmiter for parent
    }


    // console.log(this.SelectedList.length,this.SelectedList )
 
  
  }

  ClearChecks() {
    const all = document.querySelectorAll("input");
    all.forEach(element => {
      element.checked = false;
      this.SelectedList = [];
    });

    console.log("ClearChecks");

  }


  //clear all chboxes clear SelectedList and set  SelectedList(id) and chboxes to its value
  ClearChecksExeptThisId(id: string) {
    this.SelectedList = [];//todo
    this.FindAllIds(this.tree);

    this.AllIds.forEach(i => {
      if (i != id) {
        const ch = document.getElementById(i) as HTMLInputElement;
        ch.checked = false;
      }

    });
    debugger;

    const ch = document.getElementById(id) as HTMLInputElement;
    if (ch.checked == true) { this.FindInTree3(this.tree, id);}  

    //this.SelectedList.push();
    



    // const all = document.querySelectorAll("input");
    // this.SelectedList = [];
    // const ch = document.getElementById(id) as HTMLInputElement;
    // if (ch.checked == true) {
    //   this.SelectedList.push(this.tree.find(t => t.id == id) as MyTreeViewModel);
    //   this.FindInTree(this.tree, id);
    // } else {
    //   this.SelectedList = [];
    // }
    // all.forEach(element => {
    //   if (element.id != id) element.checked = false;
    // });
  }



  FindInTree(arr: Array<MyTreeViewModel>, id: any): void {
    // this.tree.forEach(t => {
    //   if(t.id==id)
    //   return t;
    // });


    arr.forEach(element => {
      if (element.id == id) {
        this.SelectedList = [];
        this.SelectedList.push(element)

      }
      else if (element.nodes.length != 0) {

        element.nodes.forEach(e => {
          this.FindInTree(element.nodes, id);

        });

      }
    });

  }


  FindInTree2(arr: Array<MyTreeViewModel>, id: any): any {

    arr.forEach(element => {
      if (element.id == id) {
        //if(this.SelectedList.find(t=>t.id!=id))   
        this.SelectedList = this.SelectedList.filter(t => t.id != id);
        this.SelectedList.push(element);

      }
      else if (element.nodes.length != 0) {

        element.nodes.forEach(e => {
          this.FindInTree2(element.nodes, id);

        });
      }
    });
  }


  FindInTree3(arr: Array<MyTreeViewModel>, id: any): any {

    arr.forEach(element => {
      if (element.id == id) {
        //if(this.SelectedList.find(t=>t.id!=id))   
        ////this.SelectedList = this.SelectedList.filter(t => t.id != id);
        this.SelectedList = [];
        this.SelectedList.push(element);
        return;

      }
      else if (element.nodes.length != 0) {

        element.nodes.forEach(e => {
          this.FindInTree3(e.nodes, id);

        });
      }
    });
  }


  CheckAll(): void {
    const checkAllCheckBox = document.getElementById("All") as HTMLInputElement;
    this.SelectedList = [];//todo
    this.FindAllIds(this.tree);
    if (checkAllCheckBox.checked == true) {
      this.AllIds.forEach(id => {
        const ch = document.getElementById(id) as HTMLInputElement;
        ch.checked = true;
      });



    }
    else {
      this.AllIds.forEach(id => {
        const ch = document.getElementById(id) as HTMLInputElement;
        ch.checked = false;
        this.SelectedList = [];//todo

      });

    }



  }

  FindAllIds(arr: Array<MyTreeViewModel>): void {

    arr.forEach(element => {
      this.AllIds.push(element.id)
      this.SelectedList.push(element);

      if (element.nodes.length != 0) {

        element.nodes.forEach(e => {
          this.FindAllIds(element.nodes);

        });

      }
    });

  }


  returnId():any
  {
   return this.id.emit(this.AllIds==null ? null:this.AllIds[0]);
  }

  returnIds():any
  {
    return this.id.emit(this.AllIds);
  }


}

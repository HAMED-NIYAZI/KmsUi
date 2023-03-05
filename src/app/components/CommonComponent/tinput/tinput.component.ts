import { IfStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { TreeClass } from './TreeClass';

@Component({
  selector: 'app-tinput',
  templateUrl: './tinput.component.html',
  styleUrls: ['./tinput.component.css']
})

export class TinputComponent implements OnInit {
  // @Input() tree:Array<TreeClass>;
  @Input() isMultiSelectable!: boolean;
  tree: Array<TreeClass> = [];
  SelectedList: Array<TreeClass> = [];
  AllIds:Array<string>=[];
  ngClassParent: string = "parent";
  ngClassParentDown: string = "parent-down";

  constructor() {
    this.isMultiSelectable == false
    this.tree = [
      new TreeClass("حراست", "L1-1", false,
        [
          new TreeClass("نگهبانی", "L2-1", false, []),
          new TreeClass("اداری", "L2-2", false, []),
          new TreeClass("مراقبت", "L3-3", false, []),
          new TreeClass(" با شرایط و ضوابط موافقم و آن را می پذیرم اطلاعات", "L4-1", false,
            [
              new TreeClass("با شرایط و ضوابط موافقم و آن را می پذیرم اداری", "L4-2", false, []),
              new TreeClass("نیروی انسانی", "L4-3", false, []),
              new TreeClass("برنامه ریزی", "L4-4", false, []),
            ]),
        ]),

      new TreeClass("مالی", "L1-2", false, []),
      new TreeClass("بهره برداری", "L1-3", false, [])



    ];

    if (this.isMultiSelectable == false) {
      this.ClearChecks();
    }



  }

  ngOnInit(): void {
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
    debugger;
    if (this.isMultiSelectable == false) {
      this.ClearChecksExeptThisId(id);

    } else if (this.isMultiSelectable == true) {
      let find = this.SelectedList.find(obj => obj.id == id);
      if (find == null) {
        //  let findNew=this.tree.find(t => t.id == id) as TreeClass
        let findNew = this.FindInTree2(this.tree, id) as TreeClass
        if (findNew != null)
          this.SelectedList.push(findNew);
      }
      else {
        this.SelectedList = this.SelectedList.filter(obj => obj.id !== id);
      }
    }


    // console.log(this.SelectedList.length,this.SelectedList )
  }

  ClearChecks() {
    const all = document.querySelectorAll("input");
    all.forEach(element => {
      element.checked = false;
      this.SelectedList = [];
    });
  }


  //clear all chboxes clear SelectedList and set  SelectedList(id) and chboxes to its value
  ClearChecksExeptThisId(id: string) {

    this.SelectedList =[];//todo
    this.FindAllIds(this.tree);

      this.AllIds.forEach(id => {
        const ch = document.getElementById(id) as HTMLInputElement;
        ch.checked = false;
      });
      const ch = document.getElementById(id) as HTMLInputElement;
      ch.checked = true;
      this.FindInTree2(this.tree,id);
 
    

    // const all = document.querySelectorAll("input");
    // this.SelectedList = [];
    // const ch = document.getElementById(id) as HTMLInputElement;
    // if (ch.checked == true) {
    //   this.SelectedList.push(this.tree.find(t => t.id == id) as TreeClass);
    //   this.FindInTree(this.tree, id);
    // } else {
    //   this.SelectedList = [];
    // }
    // all.forEach(element => {
    //   if (element.id != id) element.checked = false;
    // });
  }



  FindInTree(arr: Array<TreeClass>, id: any): void {
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


  FindInTree2(arr: Array<TreeClass>, id: any): any {

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


  CheckAll():void { 
     const checkAllCheckBox=document.getElementById("All") as HTMLInputElement;
    this.SelectedList =[];//todo
    this.FindAllIds(this.tree);
    if(checkAllCheckBox.checked==true)
    {
      this.AllIds.forEach(id => {
        const ch = document.getElementById(id) as HTMLInputElement;
        ch.checked = true;
      });
    

 
    }
    else{
        this.AllIds.forEach(id => {
        const ch = document.getElementById(id) as HTMLInputElement;
        ch.checked = false;
        this.SelectedList =[];//todo

      });
     
    }

       
 
  }

  FindAllIds(arr: Array<TreeClass>):void
  {
    
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


}

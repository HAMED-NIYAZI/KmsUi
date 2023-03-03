import { Component, Input, OnInit } from '@angular/core';
import { TreeClass } from './TreeClass';

@Component({
  selector: 'app-tinput',
  templateUrl: './tinput.component.html',
  styleUrls: ['./tinput.component.css']
})
export class TinputComponent implements OnInit {
  // @Input() tree:Array<TreeClass>;
  tree: Array<TreeClass> = [];
ngClassParent:string="parent";
ngClassParentDown:string="parent-down";

  constructor(/*tree: Array<TreeClass>*/) {

    this.tree = [
      new TreeClass("حراست", "1",
        [
          new TreeClass("نگهبانی", "23", []),
          new TreeClass("اداری", "34", []),
          new TreeClass("مراقبت", "46", []),
          new TreeClass(" با شرایط و ضوابط موافقم و آن را می پذیرم اطلاعات", "47",
          [
            new TreeClass("با شرایط و ضوابط موافقم و آن را می پذیرم اداری", "94", []),
            new TreeClass("نیروی انسانی", "884", []),
            new TreeClass("برنامه ریزی", "554", []),
          ]),
        ]),

      new TreeClass("مالی", "2", []),
      new TreeClass("بهره برداری", "3", []),
      new TreeClass("1خزانه", "4", [
        new TreeClass("مالی", "2", []),
        new TreeClass("مالی", "2", []),
        new TreeClass("2مالی", "2", [
          new TreeClass("مالی", "2", []),
          new TreeClass("با شرایط و ضوابط موافقم و آن را می پذیرم مالی", "2", []),
          new TreeClass("3مالی", "2", [
            new TreeClass("با شرایط و ضوابط موافقم و آن را می پذیرم مالی", "2", []),
            new TreeClass("4مالی", "2", [
              new TreeClass("مالی", "2", []),
              new TreeClass("مالی", "2", []),
              new TreeClass("مالی5", "2", [
                new TreeClass("با شرایط و ضوابط موافقم و آن را می پذیرم مالی", "2", []),
                new TreeClass("مالی", "2", []),
                new TreeClass("مالی6", "2", [
                  new TreeClass("مالی", "2", []),
                  new TreeClass("7مالی", "2", [
                    new TreeClass("با شرایط و ضوابط موافقم و آن را می پذیرم مالی", "2", []),
                    new TreeClass("مالی8", "2", [
                      new TreeClass("مالی", "2", []),
                      new TreeClass("مالی9", "2", [
                        new TreeClass("مالی", "2", []),
                        new TreeClass("مالی", "2", []),
                        new TreeClass("مالی10", "2", [])
                      ])
                    ])
                  ]),
                  new TreeClass("مالی", "2", []),
                ])
              ])
            ]),

          ])
        ])
      ]),
    ];
  }

  ngOnInit(): void {
   }


  //for style
  ClickOnParent(event:any) {

   //  event.srcElement.classList.remove("parent");
   // event.srcElement.classList.add("parent-down");
   //console.log(event.nativeElement.nextElementSibling);
   //console.log(event.srcElement.nextElementSibling);
   //nativeElement.querySelector('.div1').style.display = 'none';
    if(event.srcElement.classList[0]=="parent")
    {
  event.srcElement.classList.remove("parent");
   event.srcElement.classList.add("parent-down");
   event.srcElement.nextElementSibling.classList.add("active");
    }else   if(event.srcElement.classList[0]=="parent-down")
    {
  event.srcElement.classList.remove("parent-down");
   event.srcElement.classList.add("parent");
   event.srcElement.nextElementSibling.classList.remove("active");

    }


  }


}

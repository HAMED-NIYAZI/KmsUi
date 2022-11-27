import { Component, Input, OnInit } from '@angular/core';
//import { TreeClass } from './TreeClass';

@Component({
  selector: 'app-tinput',
  templateUrl: './tinput.component.html',
  styleUrls: ['./tinput.component.css']
})
export class TinputComponent implements OnInit {
  //@Input() tree:Array<TreeClass>
  //tree: Array<TreeClass> = [];


  constructor(/*tree: Array<TreeClass>*/) {

    // this.tree = [
    //   new TreeClass("1", "1",
    //     [
    //       new TreeClass("23", "23", []),
    //       new TreeClass("34", "34", []),
    //       new TreeClass("46", "46", []),
    //       new TreeClass("47", "47",
    //       [
    //         new TreeClass("94", "94", []),
    //         new TreeClass("884", "884", []),
    //         new TreeClass("554", "554", []),
    //       ]),
    //     ]),

    //   new TreeClass("2", "2", []),
    //   new TreeClass("3", "3", []),
    //   new TreeClass("4", "4", []),
    // ];
  }

  ngOnInit(): void {

  }

  ClickOnPlus() {
    console.log("ClickOnPlus");
    // var toggler = document.getElementsByClassName("parent");
    // var i;

    // for (i = 0; i < toggler.length; i++) {
    //   toggler[i].addEventListener("click", function () {
    //     this.parentElement.querySelector(".nested").classList.toggle("active");
    //     this.classList.toggle("parent-down");
    //   });
    // }
  }


}

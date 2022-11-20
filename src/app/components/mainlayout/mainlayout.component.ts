import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent implements OnInit {
  toggleSidebarValrable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  fireToggleSidebarClass() {
    this.toggleSidebarValrable = !this.toggleSidebarValrable;
  }

}

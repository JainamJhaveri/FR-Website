import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  Tabs = Tabs;
  selectedTab: Tabs;

  constructor() { }

  ngOnInit() {
    this.selectedTab = Tabs.All;
  }

  selectTab(uploadTab: Tabs): void {
    this.selectedTab = uploadTab;
  }

}


enum Tabs{
  All = 1,
  UploadPics
}

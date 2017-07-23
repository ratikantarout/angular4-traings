import { Component, Input } from '@angular/core';
@Component({
  selector: 'my-tabs',
  templateUrl: 'my-tabs.html',
  styleUrls: ['./my-tabs.css']
})
export class Tabs {
  @Input() tabs;
  @Input() tabHeads;
  @Input() tabsParms;

  constructor() {
  }

}
import { Component,Input } from '@angular/core';
@Component({
  selector: 'my-tabs',
  templateUrl:'my-tabs.html'
})
export class Tabs {
  @Input() tabs;
  @Input() tabHeads;
}
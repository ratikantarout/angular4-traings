import { Component, OnInit } from '@angular/core';
import { AdService } from './components/dynamic-component-loader/ad.service';
import { AdItem } from './components/dynamic-component-loader/ad.item';
import { C1 } from './components/dynamic-tab/components/c1.component';
import { C2 } from './components/dynamic-tab/components/c2.component';
import { C3 } from './components/dynamic-tab/components/c3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  types = [C3, C1, C2, C3, C3, C1, C1, C2];
  tabHead = [3, 1, 2, 3, 3, 1, 1, 8];
  tabParms = [
    {
      name: '3three'
    },
    {
      name: '1'
    },
    {
      name: '2'
    },
    {
      name: '3'
    },
    {
      name: '3'
    },
    {
      name: '1'
    },
    {
      name: '1'
    },
    {
      name: '8'
    }];

  onClickRemove() {
    this.types.splice(-1, 1);
    this.tabHead.splice(-1, 1);
    this.tabParms.splice(-1, 1);
  }

  onClickAdd() {
    let randnumber = Math.floor((Math.random() * 3) + 1);
    if (randnumber == 1) {
      this.types.push(C1);
    } else if (randnumber == 2) {
      this.types.push(C2);
    } else if (randnumber == 3) {
      this.types.push(C3);
    }
    this.tabHead.push(randnumber);
    this.tabParms.push({ name: randnumber.toString() });
  }
  ads: AdItem[];
  constructor(private adService: AdService) {
    this.types.push(C3);
    this.tabHead.push(3);
    this.tabParms.push({ name: '3' });
    this.types.push(C1);
    this.tabHead.push(1);
    this.tabParms.push({ name: '1' });
  }
  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}

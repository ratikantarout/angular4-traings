import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdDirective } from './ad.directive';
import { AdItem } from './ad.item';
import { AdComponent } from './ad.component';

@Component({
    selector: 'add-banner',
    template: `
              <div class="ad-banner">
                <h3>Advertisements</h3>
                <ng-template ad-host></ng-template>
              </div>
            `,
    styles: [`h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[text], button {
  color: #888;
  font-family: Cambria, Georgia;
}
a {
  cursor: pointer;
  cursor: hand;
}
button {
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #aaa;
  cursor: auto;
}
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-right: 10px;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited, a:link {
  color: #607D8B;
}
nav a:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
nav a.active {
  color: #039be5;
}
* {
  font-family: Arial, Helvetica, sans-serif;
}
`]
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {
    @Input() ads: AdItem[];
    currentAddIndex: number = -1;
    @ViewChild(AdDirective) adHost: AdDirective;
    subscription: any;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngAfterViewInit() {
        this.loadComponent();
        this.getAds();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
        let adItem = this.ads[this.currentAddIndex];

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

        let viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<AdComponent>componentRef.instance).data = adItem.data;
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000);
    }
}
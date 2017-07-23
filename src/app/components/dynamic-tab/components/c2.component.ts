import { Component,Input } from '@angular/core';
@Component({
    selector: 'c2',
    template: `<i>i am from component 2</i>
     <h1>Passed datas are {{someProperty.name}}</h1>`

})
export class C2 {
    type = '';
    @Input() someProperty;
    constructor() {
    }
    ngAfterViewInit() {
        console.log(this.someProperty);
    }
}

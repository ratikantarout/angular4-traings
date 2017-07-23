import { Component, Input } from '@angular/core';
@Component({
    selector: 'c3',
    template: `<span>i am from component 3</span>
     <h1>Passed datas are {{someProperty.name}}</h1>`

})
export class C3 {
    type = '';
    @Input() someProperty;
    constructor() {
    }
    ngAfterViewInit() {
        console.log(this.someProperty);
    }
}

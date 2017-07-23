import { Component, Input } from '@angular/core';
@Component({
    selector: 'c1',
    template: `<b>i m from component 1</b>
    <h1>Passed datas are {{someProperty.name}}</h1>
    `

})
export class C1 {
    type = '';
    @Input() someProperty;
    constructor() {
    }
    ngAfterViewInit() {
        console.log(this.someProperty);
    }
}
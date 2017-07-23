import { Component, Compiler, ViewContainerRef, ViewChild, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core'
@Component({
    selector: 'dcl-wrapper',
    template: `<div #target></div>`
})
export class DclWrapper {
    @ViewChild('target', { read: ViewContainerRef }) target;
    @Input() type;
    @Input() dataParms;
    cmpRef: ComponentRef<any>;
    private isViewInitialized: boolean = false;
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private compiler: Compiler,
        private cdRef: ChangeDetectorRef) {
    }
    updateComponent() {
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
        this.cmpRef = this.target.createComponent(factory)
        this.cmpRef.instance.someProperty = this.dataParms;
        // this.cmpRef.instance.someOutput.subscribe(val => this.doSomething());
        this.cdRef.detectChanges();
    }
    ngOnChanges() {
        this.updateComponent();
    }
    ngAfterViewInit() {
        this.isViewInitialized = true;
        this.updateComponent();
    }
    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}
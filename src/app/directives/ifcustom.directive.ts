import{ Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({ selector: '[customIf]' })
export class IfDirective{
    constructor ( 
        private templateRef: TemplateRef<any>,
        private viewcontainerRef: ViewContainerRef        
    ){}
    @Input() set customIf(inputVal: boolean) {
        if(inputVal){
            this.viewcontainerRef.createEmbeddedView(this.templateRef)
        }
        else{
            this.viewcontainerRef.clear();
        }
    }
}


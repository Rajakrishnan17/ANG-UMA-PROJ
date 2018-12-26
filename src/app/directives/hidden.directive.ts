import { Directive, ElementRef,Input, Renderer } from '@angular/core';


@Directive({ selector: '[customHidden]' })

export class HiddenDirective {
    

    constructor(public el: ElementRef, public renderer: Renderer) {
      
    }

    @Input() customHidden: boolean;
    ngOnInit(){
        // Use renderer to render the emelemt with styles
        console.log(this.customHidden)
        if(this.customHidden) {
            console.log('hide');
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }
    }
}
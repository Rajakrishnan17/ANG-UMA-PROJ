import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';


@Directive({ selector: '[customMouseover]' })

export class HostListenDirective {
    

    constructor(public el: ElementRef, public renderer: Renderer) {
      
    }

    @HostListener('mouseenter') onmouseenter(){
        this.hover(true);
    }
    @HostListener('mouseleave') onmouseleave(){
        this.hover(false);
    }
    hover(addBorder: boolean){
        if(addBorder){
            this.renderer.setElementStyle(this.el.nativeElement, 'border', '1px solid #333');
        }
        else{
            this.renderer.setElementStyle(this.el.nativeElement, 'border', 'none');
        }
    }

    
}
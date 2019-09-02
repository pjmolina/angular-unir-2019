import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResalta]'
})
export class ResaltaDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

}

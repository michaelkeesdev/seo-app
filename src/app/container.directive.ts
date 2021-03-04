import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[container]'
})
export class ContainerDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.maxWidth = '1200px';
    this.el.nativeElement.style.width = 'calc(100% - 32px)';
    this.el.nativeElement.style.paddingLeft = '16px';
    this.el.nativeElement.style.paddingRight = '16px';
    this.el.nativeElement.style.margin = 'auto';
  }

}

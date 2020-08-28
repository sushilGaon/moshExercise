import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format:string;
  constructor(private el: ElementRef) { }
  
  @HostListener('blur') onBlur(){
    let val : string = this.el.nativeElement.value;

    if(this.format == 'uppercase')
      this.el.nativeElement.value = val.toUpperCase();

  }

}

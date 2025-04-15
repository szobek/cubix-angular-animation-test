import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUserItem]'
})
export class UserItemDirective {

  constructor(private readonly el: ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.style.color="rgb(185 185 195)"
    this.el.nativeElement.style.border="1px solid #36f"
    this.el.nativeElement.style.margin="5px 0"
    this.el.nativeElement.style.padding="5px"
  }

}

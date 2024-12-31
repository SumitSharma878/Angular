import { Directive, ElementRef, Host, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyeventdirective]'
})
export class MyeventdirectiveDirective implements OnInit {
  ngOnInit(): void {
  this.e.nativeElement.style.color="brown"
  } 

  constructor(private e:ElementRef,private renderer:Renderer2) { }
  @HostListener('mouseover') method1(event:Event){
   // this.e.nativeElement.style.color="green";
   this.renderer.setStyle(this.e.nativeElement, 'color', 'green');
  }

}

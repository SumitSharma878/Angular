import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[appCustomizedstyledirective]'
})
export class CustomizedstyledirectiveDirective implements OnInit {

  constructor(private e:ElementRef) { }
  ngOnInit(): void {
    this.e.nativeElement.style.backgroundColor = 'red';
    this.e.nativeElement.style.color = 'white';
    this.e.nativeElement.style.padding = '10px';
    this.e.nativeElement.style.borderRadius = '5px';
    this.e.nativeElement.style.cursor = 'pointer';
  }

}


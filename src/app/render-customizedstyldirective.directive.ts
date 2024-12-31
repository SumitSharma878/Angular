import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appRenderCustomizedstyldirective]'
})
export class RenderCustomizedstyldirectiveDirective implements OnInit {

  constructor(private e:ElementRef,private render:Renderer2) {
    console.log(render);
    console.log(e);
   }
  ngOnInit(): void {
    this.render.setStyle(this.e.nativeElement, 'backgroundColor', 'green');
    this.render.setStyle(this.e.nativeElement, 'color', 'white');
    this.render.setStyle(this.e.nativeElement, 'padding', '10px');
    this.render.setStyle(this.e.nativeElement, 'border', '1px solid black');
    this.render.setStyle(this.e.nativeElement, 'cursor', 'pointer');
    this.render.setStyle(this.e.nativeElement, 'transition', 'all 0.5s ease');
  }

}

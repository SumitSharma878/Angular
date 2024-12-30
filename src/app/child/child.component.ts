import { Component, ElementRef, ViewChild,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
uname: string="sumitsharma";
// below im creating emptty object without its throwing error 
@ViewChild('boxId') boxId:ElementRef={}as ElementRef ;
constructor(private renderer:Renderer2){
  
}
clickMe(): void{
  alert("Hello " + this.uname);
  console.log(this.boxId);
  // this.boxId.nativeElement.style.color = "yellow";
  // this.boxId.nativeElement.style.backgroundColor = "blue";
  // this.boxId.nativeElement.style.fontSize = "24px";
  // better to use renderer  instead of plane javascript
  this.renderer.setStyle(this.boxId.nativeElement, 'color', 'red');
  this.renderer.setStyle(this.boxId.nativeElement, 'backgroundColor', 'blue');
  this.renderer.setStyle(this.boxId.nativeElement, 'fontSize', '24px');
  this.renderer.setProperty(this.boxId.nativeElement,'title','hisumit');
;}
}

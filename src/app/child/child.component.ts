import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('y') y:string='';
    @Output()  myEvent:EventEmitter<string>= new EventEmitter();
    sendData():void{
      this.myEvent.emit('im your child data');
    }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  childDataReceived:string = '';
receivedData(data: any):void {
 this.childDataReceived =data;
}
parentMessage: string="hellow child how are you?";

}

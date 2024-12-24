import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
action2(): void {
  this.firstName="suduir",
  this.lastName="kumar",
  this.gmailId="sudhir@gmail.com",
  this.age=35,
  this.mobileNo=987654321;
  // this.locationOfImage="../assets/mountain.jpg";
}
action1():void {
console.log("you clicked on image");
alert('downloaded ');
}
  firstName:string ="sumit";
  lastName:string ="sharma";
  gmailId:string ="sumit@gmail.com";
  age:number = 30;
  mobileNo:number = 987654321;
  locationOfImage:string = "../assets/nature.jpg";

}

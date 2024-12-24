import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
 products=[
  {
    'id': '100',
    'name':'item1',
    'img':'../assets/img1.jpeg',
    'price':40
  },
  {
    'id': '101',
    'name':'item2',
    'img':'../assets/img2.jpeg',
    'price':50
  },
  {
    'id': '102',
    'name':'item3',
    'img':'../assets/img3.jpeg',
    'price':69
  },
  {
    'id': '103',
    'name':'item4',
    'img':'../assets/img4.webp',
    'price':470
  },
  {
    'id': '104',
    'name':'item5',
    'img':'../assets/img5.webp',
    'price':405
  },
  {
    'id': '105',
    'name':'item6',
    'img':'../assets/img6.webp',
    'price':4025
  }
 ]


}

import { Component } from '@angular/core';
import { NameFormatPipe } from './name-format.pipe';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  books?: string[];
}
@Component({
  selector: 'app-root',
  imports: [NameFormatPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('hideDetails', [
      transition(':enter', [
        style({ opacity: 0,backgroundColor:'rgb(158, 158, 158)',color:'wheat'  }),
        animate('2300ms', style({ opacity: 1}))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0, }))
      ])
    ]),
  ],
})
export class AppComponent {
  changeDetectionCounter:number = 0;
  viewedData?: Data;
  showDetails:boolean = false;
  datas: Data[] = [
    { id: 1, name: 'John Doe', age: 30, address: '123 Main St' },
    { id: 2, name: 'Jane Smith', age: 25, address: '456 Oak St' },
    { id: 3, name: 'Alice Johnson', age: 28, address: '789 Pine St' },
    { id: 4, name: 'Bob Brown', age: 35, address: '101 Maple St' },
    { id: 5, name: 'Charlie Davis', age: 22, address: '202 Cedar St' },
    { id: 6, name: 'Diana Evans', age: 29, address: '303 Birch St' },
    { id: 7, name: 'Ethan Foster', age: 32, address: '404 Elm St' },
    { id: 8, name: 'Fiona Green', age: 27, address: '505 Spruce St',books:["book1","book2"] },
    { id: 9, name: 'George Harris', age: 31, address: '606 Fir St' },
    { id: 10, name: 'Hannah Ives', age: 24, address: '707 Willow St' },
  ];
  viewDetails(data: Data) {
    this.viewedData = data;
    this.showDetails=true
  }
  closeDetails() {
    this.viewedData = undefined;
    this.showDetails=false
  }
  chengeShowDetails(){
   console.log("change", ++this.changeDetectionCounter);
   
  }
}

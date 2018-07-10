import { Component, OnInit } from '@angular/core';
import {Products} from '../products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products : Products[];
  title : string;
  tableHead : Array<string>;
  constructor() {
    this.title = 'Products List';
    this.products = [
        { id: 1001, name: 'Nike Shoes', price: 20 , created_at :'12/01/2018' },
        { id: 1002, name: 'Manoj', price:40, created_at :'04/07/2017' },
        { id: 1003, name: 'Jyoti', price: 60, created_at :'01/12/2017'  },
        { id: 1004, name: 'Asha', price: 70, created_at :'05/12/2017'  },
      ];
      this.tableHead = ['id','name','price','created On'];
   }

  ngOnInit() {
    
  }
}

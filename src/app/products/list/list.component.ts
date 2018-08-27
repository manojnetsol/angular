import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Products} from '../products';
import { map } from 'rxjs/operators';
import {ProductDataService} from '../product-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] 
})
export class ListComponent implements OnInit {
  title : string;
  tableHead : Array<string>;

  productCollectionRef: AngularFirestoreCollection<Products>;
  productsData :Array<Object>;

  constructor(private afs: AngularFirestore,private db: AngularFireDatabase, private routes:Router, private productService: ProductDataService) {
    this.title = 'Products List';
    this.tableHead = ['id','name','price','weight','operations'];
   }

  ngOnInit() {
    this.fetchProducts(); 
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(dataObject => {
      this.productsData = dataObject;
    })
  }

  deleteProduct(id:string) {
    if(confirm("Are you sure to delete "+id)) {
      this.productService.deleteProduct(id);
    }
  }  

  addProduct() {
    this.routes.navigate(['addproduct']);
  }
}
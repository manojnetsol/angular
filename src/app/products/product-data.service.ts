import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  apiurl = 'api/books';
  productCollection :AngularFirestoreCollection<any>;
  products: Observable<any[]>;
  constructor(private httpClient : HttpClient, private db:AngularFirestore) {
    this.productCollection = this.db.collection<any>('products');
  }

  // getProducts() :Observable<any> {
  //   return this.httpClient.get(this.apiurl);
  // }

  getProducts() {
    
  }
}
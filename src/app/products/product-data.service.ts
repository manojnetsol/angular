import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

import {Products} from './products';

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
    return this.productCollection.snapshotChanges().pipe(
      map( docArray => {
      return docArray.map( doc => { 
        return(
          {
            data: doc.payload.doc.data() as Products,
            id: doc.payload.doc.id,
          }
        );
      });
    }))
  }

  getProductById(id:string) {
    return this.productCollection.doc(id);
  }

  deleteProduct(id:string) {
    this.productCollection.doc(id).delete();
  }

  updateProduct(product: Products) {
    this.productCollection.doc(product.id).update(
      {
        name:product.name,
        weight:product.weight,
        stock:product.stock,
        price:product.price,
        description:product.description
      }
    );
  }

  saveProduct(product : Products) {
    return this.productCollection.add(
      {
        name:product.name,
        weight:product.weight,
        stock:product.stock,
        price:product.price,
        description:product.description
      }
    );
  }
}
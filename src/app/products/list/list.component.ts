import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Products} from '../products';
import { map } from 'rxjs/operators';
// import {ProductDataService} from '../product-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'] 
})
export class ListComponent implements OnInit {
  title : string;
  books : Array<any>;
  tableHead : Array<string>;

  productCollectionRef: AngularFirestoreCollection<Products>;
  product: Observable<Products[]>;

  itemsRef: AngularFireList<any>;
  items: Observable<Products[]>;

  constructor(private afs: AngularFirestore,private db: AngularFireDatabase) {
    this.title = 'Products List';
    this.tableHead = ['id','name','price','weight','operations'];

    //this.productCollectionRef = this.afs.collection('products');
    // this.productCollectionRef.snapshotChanges().map(actions => {
    //   console.log(actions);
      
    //   return actions.map(action => {
    //     const data = action.payload.doc.data() as Products;
    //     data.id = action.payload.doc.id;
    //     console.log(data.id);
    //     return data;
    //   });
    // });
    console.log("ssdvsdvs");
    this.itemsRef = db.list('products');
    this.itemsRef.snapshotChanges().pipe(
        map(changes => {
          console.log(changes);
         changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
       }
      )
      
    );
    //console.log(this.items);
   }

  ngOnInit() {
    //this.product = this.productCollectionRef.valueChanges();
  }
  getProductsList() {
  }
}

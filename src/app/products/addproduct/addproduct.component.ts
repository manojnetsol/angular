import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {ActivatedRoute, Router} from "@angular/router";

import {ProductDataService} from '../product-data.service';
import { Products} from '../products';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product = new Products();
  dataArray:any;
  constructor(private productService: ProductDataService,private route: ActivatedRoute, private routes : Router) {
    this.route.params.subscribe(params =>{
      this.product.id = params.id;
    });
  }

  ngOnInit() {
    if(this.product.id) {
      this.productService.getProductById(this.product.id).valueChanges().pipe(
        catchError((err) => {
          throw alert(err);
        })
      )
      .subscribe(
          docArray => {
            this.dataArray = docArray;
            if(this.dataArray) {
              this.dataArray.id = this.product.id;
              this.product = this.dataArray;
            } else {
              this.routes.navigate(['productlist']);
            }
          }
      );
    }
  }

  saveProduct() {
    if(this.product.id) {
      this.productService.updateProduct(this.product);
    } else {
      this.productService.saveProduct(this.product);
    }
  }
}
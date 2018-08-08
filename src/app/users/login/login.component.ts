import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  loading = false;
  model: any = {};
  constructor(private authService : AuthService , private router:Router) {}

  ngOnInit() {
    if(this.authService.isUserLoggedIn()) {
      this.router.navigate(['productlist']);
    }
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.email, this.model.password);
    //this.loading = false;
  }
}

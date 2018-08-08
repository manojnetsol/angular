import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUser:Observable<firebase.User>;
  error:string;
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private firebaseAuth : AngularFireAuth , private router: Router) {
     this.authUser = firebaseAuth.authState;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }

  login(email:string, password:string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email,password)
      .then( value => {
        this.loggedIn.next(true);
        localStorage.setItem('currentUser', JSON.stringify(value));
        this.router.navigate(['dashboard']);
      })
      .catch(err=> {
        this.error = err.message;
      })
  }

  register(email:string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value=> {
        console.log('Nice, it worked!',value);
      })
      .catch(err=> {
        console.log('Something went wrong:',err.message);
      })
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.loggedIn.next(false);
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

  isUserLoggedIn() {
    if(localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }
}
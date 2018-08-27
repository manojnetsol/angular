import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  firstname: string;
  email: string;
  message: string;
  phoneno : string;
  lastname : string;
  address : string;
  msg :string;
  contacts: Observable<any[]>;

  constructor(private afauth: AngularFireAuth, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.contacts = this.db.collection('contacts').valueChanges();
  } 

  processForm() { 
  }
}

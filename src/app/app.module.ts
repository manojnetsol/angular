import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard.component';
import { SidbarComponent } from './sidebar/sidbar/sidbar.component';
import { ListComponent } from './products/list/list.component';
import { HighlightDirective } from './highlight.directive';
import { UserlistComponent } from './users/userlist/userlist.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import {ApiData} from './api-data';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './users/login/login.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidbarComponent,
    ListComponent,
    HighlightDirective,
    UserlistComponent,
    ContactsComponent,
    PageNotFoundComponentComponent,
    LoginComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
   // AngularFirestoreModule.enablePersistence(),
    HttpClientInMemoryWebApiModule.forRoot(ApiData)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

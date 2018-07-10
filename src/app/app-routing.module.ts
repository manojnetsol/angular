import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './products/list/list.component';
import {UserlistComponent} from './users/userlist/userlist.component';
import {ContactsComponent} from './contacts/contacts.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/productlist', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'productlist', component: ListComponent },
  { path: 'userlist', component:UserlistComponent },
  { path: 'contactus', component:ContactsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
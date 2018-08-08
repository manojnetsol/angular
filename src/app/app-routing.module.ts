import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './products/list/list.component';
import {UserlistComponent} from './users/userlist/userlist.component';
import {ContactsComponent} from './contacts/contacts.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './users/login/login.component';
import { AuthGuard } from './auth.guard';
 
const routes: Routes = [
  { path: '', redirectTo: '/productlist', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'productlist', component: ListComponent, canActivate:[AuthGuard] },
  { path: 'userlist', component:UserlistComponent, canActivate:[AuthGuard] },
  { path: 'contactus', component:ContactsComponent,canActivate:[AuthGuard] },
  { path: '**', component:PageNotFoundComponentComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
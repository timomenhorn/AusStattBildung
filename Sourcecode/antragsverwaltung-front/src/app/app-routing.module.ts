import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {CreateComponent} from './create/create.component';
import {ListComponent} from './list/list.component';
import {LoginComponent} from './login/login.component';
import {UsermanagementComponent} from './usermanagement/usermanagement.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'form/:id',
    component: CreateComponent,
  },
  {
    path: 'form',
    component: CreateComponent,
  },
  {
    path: 'user',
    component: UsermanagementComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

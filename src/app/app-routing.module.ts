import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageGuard }   from '../components/main-page/main-page.guard';

import {AuthorizationComponent} from "../components/authorization/authorization.component";
import {RegistrationComponent} from "../components/registration/registration.component";
import {MainPageComponent} from "../components/main-page/main-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthorizationComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'main', component: MainPageComponent, canActivate: [MainPageGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ActivateGuard } from './activate-gaurd';
import { DeactivateGuard } from './deactivate-guard';

export const APP_ROUTES : Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent, canActivate: [ActivateGuard], canDeactivate: [DeactivateGuard] },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
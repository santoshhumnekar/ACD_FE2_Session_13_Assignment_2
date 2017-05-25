import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

import { routes } from './app.routes';
import { ActivateGuard } from './activate-gaurd';
import { DeactivateGuard } from './deactivate-guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ReactiveFormsModule
  ],
  providers: [ActivateGuard, DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

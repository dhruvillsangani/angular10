import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExeAngularComp } from './Server/example_angular.component';
import { userExample } from './userExample/user-example.component';
import { buttoon } from './buttonExample/button.component';
import { FormsModule } from '@angular/forms';

import { AngularDropdownModule } from 'angular-dropdown';
import { Dropdown } from './DropdownExample/dropdown.component';



@NgModule({

  declarations: [
    AppComponent,
    ExeAngularComp,
    userExample,
    buttoon,
    Dropdown
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

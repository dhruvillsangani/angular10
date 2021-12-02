import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FormsModule } from '@angular/forms';
import { formsService } from './forms.service';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ListEmployeeComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [formsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

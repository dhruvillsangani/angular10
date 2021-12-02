import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { empService } from './emp.service';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [empService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { WriteBlogComponent } from './blog/write-blog/write-blog.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


const approutes: Routes = [
  // {path:'', component:HeaderComponent},
    {path:'login', component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path: 'blog',component:BlogComponent,children:[
      {path:'',component:BlogListComponent},
      {path:'new',component:WriteBlogComponent},
      {path:':id',component:BlogDetailsComponent},
      {path:':id/edit',component:BlogEditComponent}
    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    BlogComponent,
    BlogListComponent,
    WriteBlogComponent,
    BlogDetailsComponent,
    BlogEditComponent,
    
   
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes),
    NgMultiSelectDropDownModule.forRoot(),
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

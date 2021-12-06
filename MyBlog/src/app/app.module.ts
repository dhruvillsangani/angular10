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

const approutes: Routes = [
  // {path:'', component:HeaderComponent},
    {path:'login', component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path: 'blog',component:BlogComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    BlogComponent,
    BlogListComponent,
    WriteBlogComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

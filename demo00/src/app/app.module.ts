import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { WriteBlogComponent } from './blog/write-blog/write-blog.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyblogComponent } from './blog/myblog/myblog.component';

const approutes: Routes = [
  // {path:'', component:HeaderComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'blog',component: BlogComponent, children: [
      { path: '', component: BlogListComponent },
      { path: 'new', component: WriteBlogComponent },
      { path: ':id', component: BlogDetailsComponent },
      { path: ':id/edit', component: BlogEditComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    BlogDetailsComponent,
    BlogEditComponent,
    BlogListComponent,
    WriteBlogComponent,
    MyblogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes),
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

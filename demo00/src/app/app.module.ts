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
import { AuthguardService } from './authguard.service';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



const approutes: Routes = [
  // {path:'', component:HeaderComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'blog', component: BlogComponent, children: [
      { path: '', component: BlogListComponent },
      { path: 'new', canActivate: [AuthguardService], component: WriteBlogComponent },
      { path: ':id', component: BlogDetailsComponent },
      { path: ':id/edit', canActivate: [AuthguardService], component: BlogEditComponent },
    ],
  },
  { path: 'myblog', component: MyblogComponent}
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient): any {
  return new TranslateHttpLoader(httpClient);
}

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
    FooterComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes),
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    CKEditorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent],
})
export class AppModule {}

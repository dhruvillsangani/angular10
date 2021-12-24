import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginPopupComponent } from './modal/login-popup/login-popup.component';
import { LoginService } from './shared/login.service';
import { PersonalDashboardComponent } from './personal-dashboard/personal-dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditModalComponent } from './modal/edit-modal/edit-modal.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { OnEditProfilSummaryComponent } from './modal/on-edit-profil-summary/on-edit-profil-summary.component';
import { OnEditExperienceModalComponent } from './modal/on-edit-experience-modal/on-edit-experience-modal.component';



const approutes: Routes = [
  // {path:'', component:HeaderComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'personal-dashboard',component:PersonalDashboardComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    LoginPopupComponent,
    PersonalDashboardComponent,
    EditModalComponent,
    OnEditProfilSummaryComponent,
    OnEditExperienceModalComponent,
 
    
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approutes),
    HttpClientModule,
    DpDatePickerModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

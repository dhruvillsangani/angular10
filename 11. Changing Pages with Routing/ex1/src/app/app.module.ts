import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './jobs/jobs.component';
import { PostJobComponent } from './jobs/post-job/post-job.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { EditJobComponent } from './jobs/edit-job/edit-job.component';
import { loginService } from './login.service';
import { Routes, RouterModule } from '@angular/router';
import { jobService } from './job.service';
import { AuthGuard } from './authguard.service';

const approutes: Routes = [
      // {path:'', component:HeaderComponent},
        {path:'', component:LoginComponent, pathMatch:'full'},
      {path:'jobs', component:JobsComponent,children:[
        
        {path:'new',component:PostJobComponent},
        {path:':id', component:JobDetailsComponent},

        {path:':id/edit',canActivate:[AuthGuard] ,component:EditJobComponent}

  ]},


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    JobsComponent,
    PostJobComponent,
    JobListComponent,
    JobDetailsComponent,
    EditJobComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes)    
  ],
  providers: [loginService,jobService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

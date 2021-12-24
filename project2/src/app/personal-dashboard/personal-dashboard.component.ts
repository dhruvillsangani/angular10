import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchServiceService } from '../shared/fetch-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from '../modal/edit-modal/edit-modal.component';
import { LoginService } from '../shared/login.service';
import { OnEditProfilSummaryComponent } from '../modal/on-edit-profil-summary/on-edit-profil-summary.component';
import { OnEditExperienceModalComponent } from '../modal/on-edit-experience-modal/on-edit-experience-modal.component';

@Component({
  selector: 'app-personal-dashboard',
  templateUrl: './personal-dashboard.component.html',
  styleUrls: ['./personal-dashboard.component.css']
})
export class PersonalDashboardComponent implements OnInit {
  birthdate:any;
  dateTo: any;
  dateFrom: any;
  constructor(private http:HttpClient,public fetchdetails:FetchServiceService,public modelService: NgbModal,public loginService:LoginService) { }
  website:any;


  ngOnInit(): void {
    
  //  this.monthDiff();
  }
 


//        monthDiff() {
//         for(let elements of this.fetchdetails.arr){
//             for(let item of elements.experienceProfile){
//               console.log(item);
              
//               this.dateTo = item.startDate;
//               this.dateFrom = item.endDate;
// console.log(this.dateTo);

//             }
//         }
  
//     return this.dateTo.getMonth() - this.dateFrom.getMonth() + 
//       (12 * (this.dateTo.getFullYear() - this.dateFrom.getFullYear()))
//    }
   




  onEdit(){

    this.modelService.open(EditModalComponent,{ size: 'lg', backdrop: 'static' });
     this.fetchdetails.getCountry();
     this.fetchdetails.getNationality();
     this.fetchdetails.getGovernates();
     this.fetchdetails.getWilayat();
     this.fetchdetails.getGovernoratePost();
     this.fetchdetails.getgovernatePosts();
    
  }

  onEditProfile(){
    this.modelService.open(OnEditProfilSummaryComponent,{size: 'lg', backdrop: 'static'});
  }

  onEditExperience(ExperienceId){
     console.log(ExperienceId);
    const modalref = this.modelService.open(OnEditExperienceModalComponent,{size: 'lg', backdrop: 'static'});
     modalref.componentInstance.ExperienceId = ExperienceId;  
     this.fetchdetails.experienceConuntry();      
  }
  
}

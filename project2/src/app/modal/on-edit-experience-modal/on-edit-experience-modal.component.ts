import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchServiceService } from 'src/app/shared/fetch-service.service';
import { element } from 'protractor';
@Component({
  selector: 'app-on-edit-experience-modal',
  templateUrl: './on-edit-experience-modal.component.html',
  styleUrls: ['./on-edit-experience-modal.component.css']
})
export class OnEditExperienceModalComponent implements OnInit {
 @Input() ExperienceId ;
  experienceDetails: any;
  details: any;
  countryId: any;
  EmployeeTypeId:any;
  GovernateFromCountry:any;


  constructor(public modelService: NgbModal,public activeModal: NgbActiveModal,
    private http: HttpClient,public fetchDetail:FetchServiceService) { }

  ngOnInit(): void {
    // console.log(this.ExperienceId);
   this.ExperienceDetailsFromPersonalDashboard();

   
    this.onSelectCountry(this.details.countryId);
   this.onSelectGovernates(this.details.governorateId);
  
    
  }
  ExperienceDetailsFromPersonalDashboard(){
    for(let element of this.fetchDetail.arr){
        this.experienceDetails = element.experienceProfile.find(x => x.id === this.ExperienceId); 
        this.details = this.experienceDetails;
        console.log(this.details);

            
    }
    
  }
  onSelectCountry(labelId){
      console.log(labelId);
      this.http.get(`http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy-by-parent/Countries/${labelId}`)
        .subscribe(countryChange =>{
         this.GovernateFromCountry  = countryChange;
         console.log(this.GovernateFromCountry);
        } )

  }
  onSelectGovernates(label){
     console.log(label);
     
  }
 

  onSubmit(experienceDetails){
    this.activeModal.close();
    console.log(experienceDetails);
    this.countryId = this.fetchDetail.expcountry.find(x => x.label ===experienceDetails.countryName);
    experienceDetails.countryId = this.countryId.id;
    this.EmployeeTypeId = this.fetchDetail.empType.find(x => x.label ===experienceDetails.employmentTypeName);
    experienceDetails.employmentTypeId = this.EmployeeTypeId.employmentTypeId
   
  

   

  }

}

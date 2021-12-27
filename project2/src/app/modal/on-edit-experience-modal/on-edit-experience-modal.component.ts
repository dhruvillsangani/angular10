import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchServiceService } from 'src/app/shared/fetch-service.service';
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
  wilayatFromGovernate:any;
  wilayat:any;
  governorate:any;
  marked = false;
  theCheckbox = false;

  selected = false;
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

  onSelectGovernates(governatelabelId){
     console.log(governatelabelId);
     this.http.get(`http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy-by-parent/Governorates/${governatelabelId}`)
     .subscribe(governateChange =>{
       this.wilayatFromGovernate = governateChange;
       console.log(this.wilayatFromGovernate);
     })
     
  }
  onSelectWilayat(id){ }
  onChange(e){
    // this.marked= e.target.checked;
    // console.log( this.marked  );
 
  }

  onSubmit(experienceDetails){
    this.activeModal.close();
    this.countryId = this.fetchDetail.expcountry.find(x => x.id ===experienceDetails.countryName);
    experienceDetails.countryName =this.countryId.label
    experienceDetails.countryId = this.countryId.id
   

   
    this.governorate = this.fetchDetail.Experiencegovernates.find(x => x.id ===experienceDetails.governorateName);
     experienceDetails.governorateName = this.governorate.label;
     experienceDetails.governorateId = this.governorate.id;

    this.wilayat =  this.wilayatFromGovernate.find(x => x.id ===experienceDetails.wilayatName);
   console.log(this.fetchDetail.expwilayat);
    experienceDetails.wilayatName = this.wilayat.label;
    experienceDetails.wilayatId = this.wilayat.id;

    this.EmployeeTypeId = this.fetchDetail.empType.find(x => x.label ===experienceDetails.employmentTypeName);
    console.log(this.EmployeeTypeId);
    experienceDetails.employmentTypeId = this.EmployeeTypeId.id;
    // experienceDetails.employmentTypeName = this.EmployeeTypeId.employmentTypeName;

    if(this.theCheckbox == true){
      experienceDetails.endDate = new Date().toISOString().split('T')[0];
    }

    console.log(experienceDetails);
    
  }
}

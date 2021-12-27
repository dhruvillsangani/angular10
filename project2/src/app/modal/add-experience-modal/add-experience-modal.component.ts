import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { FetchServiceService } from 'src/app/shared/fetch-service.service';
import { NgModule }      from '@angular/core';
@Component({
  selector: 'app-add-experience-modal',
  templateUrl: './add-experience-modal.component.html',
  styleUrls: ['./add-experience-modal.component.css']
})
export class AddExperienceModalComponent implements OnInit {
  GovernateFromCountry: any;
  wilayatFromGovernate: any;
  addForm = NgForm;
  marked = false;
  theCheckbox = false;
  empType:any
  empid: any;
  countryDetails: any;
  countryId: any;
  targetedCountry: any;
  cLabel: any;
  GovernateDetails: any;
  GovernateId: any;
  constructor(public modelService: NgbModal,public activeModal: NgbActiveModal,
    private http: HttpClient,public fetchDetail:FetchServiceService) { }
    

  ngOnInit(): void {
  
  }
  
// onChanges(e){
// console.log(e.target.value);
// this.targetedCountry = e.target.value
// //  this.countryDetails = this.fetchDetail.expcountry.find(e.label == e.target.value)
// // console.log(this.countryDetails);
// this.countryDetails = this.fetchDetail.expcountry.find(e =>e.label == e.target.value);
// this.countryId = this.countryDetails.id;
// // this.countryId = this.countryDetails.id;
// // console.log(this.countryId);

// }
onSelectCountry(event){
  console.log(event.target.value);

   this.countryDetails = this.fetchDetail.expcountry.find(e =>e.label == event.target.value);
   this.countryId = this.countryDetails.id;
  this.http.get(`http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy-by-parent/Countries/${this.countryId}`)
    .subscribe(countryChange =>{
     this.GovernateFromCountry  = countryChange;
     console.log(this.GovernateFromCountry);
    } )

}

onSelectGovernates(event){
this.GovernateDetails = this.GovernateFromCountry.find(e=>e.label == event.target.value)
this.GovernateId = this.GovernateDetails.id;

  this.http.get(`http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy-by-parent/Governorates/${this.GovernateId}`)
  .subscribe(governateChange =>{
    this.wilayatFromGovernate = governateChange;
    console.log(this.wilayatFromGovernate);
  })

}
onChange(e){}
onEmploymentTypeChange(empTypeEvent){
    console.log(empTypeEvent.target.value);
  this.empType = this.fetchDetail.empType.find(x => x.label ===empTypeEvent.target.value)
    this.empid = this.empType.id;
    console.log(this.empid);
    
    
}

onSubmit(addForm){
  addForm.employmentType = {}
  addForm.employmentTypeId = this.empid;
  addForm.area = {};
  addForm.draftProfileId = -1
  addForm.countryId = this.countryId;
  addForm.employmentTypeId = this.empid;
  addForm.governorate = {}
  addForm.governorateId = this.GovernateId;
  addForm.userId = 173;
  addForm.wilayat = {};
  delete addForm.presentJob;
console.log(addForm);

}

}

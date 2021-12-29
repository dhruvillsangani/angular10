import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FetchServiceService } from 'src/app/shared/fetch-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DpDatePickerModule} from 'ng2-date-picker';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  contactForm=NgForm;
   selectedFile:File = null;
   wilayatFromCountry:any;
  wilayatFromGovernate:any;
   obj:any;
   governatePostsObj: any;
   countryObj:any;
   nationalityObj:any;
   postOfficeCityObj:any;
  wilayatObj: any;
  config = {
    drops: 'up',
    format: 'M/D/YYYY'
  };
  constructor( public modelService: NgbModal
    ,public activeModal: NgbActiveModal,public fetchdetails:FetchServiceService,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchdetails.country;
    this.fetchdetails.governates;
    for(let ele of this.fetchdetails.arr){
      this.onCountryChange(ele.user.country.id);
     this.onGovernateChange(ele.user.governorate.id);
    }
  
    

  }
  onSubmit(contactForm){
    for(let ele of this.fetchdetails.arr){
      contactForm.id =  ele.user.id;
      contactForm.area = ele.user.area;
      contactForm.createdBy = ele.user.createdBy;
      contactForm.createdOn = ele.user.createdOn;
      contactForm.features = ele.user.features;
      this.obj = this.fetchdetails.governates.find(x => x.id === contactForm.governorate );
      contactForm.governorate = this.obj;
      this.governatePostsObj = this.fetchdetails.governates.find(x => x.label === contactForm.governoratePost);
      contactForm.governoratePost  = this.governatePostsObj;
      this.countryObj = this.fetchdetails.country.find(x => x.id === contactForm.country);
     contactForm.country =  this.countryObj;
     contactForm.lockedTime = ele.user.lockedTime;
      this.nationalityObj = this.fetchdetails.nationality.find(x => x.label === contactForm.nationality);
      contactForm.nationality = this.nationalityObj;
      contactForm.modifiedBy = ele.user.modifiedBy;
      contactForm.modifiedOn = ele.user.modifiedOn;
      contactForm.noOfLoginAttempt = ele.user.noOfLoginAttempt;
      contactForm.organizations = ele.user.organizations;
      contactForm.password = ele.user.password;
      this.postOfficeCityObj = this.fetchdetails.postOfficeCity.find(x => x.label === contactForm.postOfficeCity);
      contactForm.postOfficeCity = this.postOfficeCityObj;
      contactForm.profileFileId = ele.user.profileFileId;
      contactForm.profileSummary = ele.user.profileSummary;
      contactForm.roleList = ele.user.roleList;
      contactForm.status = ele.user.status;
      contactForm.title = ele.user.title;
      contactForm.verificationCode =ele.user.verificationCode;
      contactForm.verificationCompleteOn = ele.user.verificationCompleteOn;
      contactForm.verificationSendOn = ele.user.verificationSendOn;
       this.wilayatObj = this.wilayatFromGovernate.find(x => x.id === contactForm.wilayat);
       contactForm.wilayat = this.wilayatObj;


    }
    this.activeModal.close('Save click');
    console.log(contactForm);
    this.fetchdetails.getEditModalDetails(contactForm);
    this.http.put('http://103.86.16.120:8086/api/user-profile/2/update-user-profile',contactForm,{headers: new HttpHeaders().set('Authorization',`Bearer ${this.fetchdetails.token}` )})
    .subscribe(result =>{
      console.log(result);
      
    })
    this.http.get('http://103.86.16.120:8086/api/user-profile/2/173/-1?isFromHistory=false&jobApplyId=0',{headers: new HttpHeaders().set('Authorization', `Bearer ${this.fetchdetails.token}`)}).subscribe(gt =>{})
    // this.fetchdetails.fetchDetails();
    // this.fetchdetails.fetchDetails();
       this.fetchdetails.fetchImage();
  }
  onFileSelected(event){
   this.selectedFile =<File> event.target.files[0];
  
  }
  onUpload(){
    const fd = new FormData();
    fd.append('file',this.selectedFile,this.selectedFile.name)
    fd.append('isSecure','true');
    
    this.http.post('http://103.86.16.120:8086/api/file-info/upload',fd,{headers: new HttpHeaders().set('Authorization', 'Bearer yDAglGgio0cmoxUisVAXIS8HXds')})
    .subscribe(res =>{
      console.log(res);
      var result = [res];
     this.fetchdetails.imageId = result
    });
    this.fetchdetails.fetchImage();

  }

//   onChange(id){
// console.log(id);
//   }

  onCountryChange(countryId){
    console.log(countryId);
    
        this.http.get(`http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy-by-parent/Countries/${countryId}`)
        .subscribe(countryChange =>{
         this.wilayatFromCountry  = countryChange;
         console.log(this.wilayatFromCountry);
        } )
  }
  onGovernateChange(governateId){

    this.http.get(`http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy-by-parent/Governorates/${governateId}`)
    .subscribe(governateChange =>{
      this.wilayatFromGovernate = governateChange;
      console.log(this.wilayatFromGovernate);
    })
  }



  
  }



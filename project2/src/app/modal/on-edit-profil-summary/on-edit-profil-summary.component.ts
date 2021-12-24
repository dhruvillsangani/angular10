import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchServiceService } from 'src/app/shared/fetch-service.service';
@Component({
  selector: 'app-on-edit-profil-summary',
  templateUrl: './on-edit-profil-summary.component.html',
  styleUrls: ['./on-edit-profil-summary.component.css']
})
export class OnEditProfilSummaryComponent implements OnInit {

  constructor(public modelService: NgbModal
    ,public activeModal: NgbActiveModal,private http: HttpClient,public fetchDetail:FetchServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(contactForm){
  
  if(contactForm.summary ==''){
    alert("Summary is Empty")
  }
  else {
   this.activeModal.close();
   contactForm.draftProfileId = -1;
   contactForm.userId = 171;
   console.log(contactForm);
 
   this.http.put('http://103.86.16.120:8086/api/user-profile/2/update-profile-summary',contactForm,{headers: new HttpHeaders().set('Authorization', 'Bearer yDAglGgio0cmoxUisVAXIS8HXds')})
   .subscribe(result =>{
    console.log(result); 
  })
  }
  }

}

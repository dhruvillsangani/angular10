import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/shared/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FetchServiceService } from '../../shared/fetch-service.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent implements OnInit {
  @Input()name:string;
  contactForm="ngForm"
  token = [];
  error: any;
  objArr = [];
  constructor( public modelService: NgbModal
    ,public activeModal: NgbActiveModal,
     private formBuilder: FormBuilder,
     public loginService:LoginService,
     private router:Router,
     private route:ActivatedRoute,
     private http: HttpClient,
     private fetchDetails:FetchServiceService) { }

  ngOnInit(): void {
    this.http.get('http://103.86.16.120:8086/api/user/1/get-current-user',{headers: new HttpHeaders().set('Authorization', 'Bearer yDAglGgio0cmoxUisVAXIS8HXds')} ).subscribe(imgid=>{
      // console.log(imgid);
      this.objArr.push(imgid);
      for(let item of this.objArr){
      console.log(item.profileFileId);
      this.fetchDetails.imageID = item.profileFileId;
    }
    })
  
  }
  onSubmit(contactForm){
  
    this.activeModal.close('Save click');
    this.loginService.getLoginDetails(contactForm);
    let formData: FormData = new FormData();  
    formData.append('username',contactForm.email); 
    formData.append('password',contactForm.password); 
    this.http.post('http://103.86.16.120:8086/api/user/2/custom-login',
    formData).subscribe(responseData => {
      console.log(responseData);
     this.token.push(responseData);
     this.fetchDetails.tokens = this.token;
     console.log(this.fetchDetails.tokens);
     
    }), error => {
    
      this.error = error.message;
      console.log(error);
    }
    this.fetchDetails.fetchDetails();
   
    this.fetchDetails.fetchImage();
    this.router.navigate(['/personal-dashboard'], { relativeTo: this.route });
  }

  

}

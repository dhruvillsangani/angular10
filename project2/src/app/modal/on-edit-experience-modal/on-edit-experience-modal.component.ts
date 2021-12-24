import { Component, OnInit } from '@angular/core';
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

  constructor(public modelService: NgbModal,public activeModal: NgbActiveModal,
    private http: HttpClient,public fetchDetail:FetchServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(experienceDetails){

  }

}

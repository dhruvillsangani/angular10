import { Component, OnInit, ViewChild } from '@angular/core';
import { formsService } from '../forms.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {


 
  gender = 'male';
  isnewtocompany = 'yes';
  
  constructor(private formsservice:formsService) {

   }

  ngOnInit(): void {
  }
  onsubmit(contactForm) {
    this.formsservice.addEmp(contactForm);
    
    console.log(contactForm);
  

    
  }

}

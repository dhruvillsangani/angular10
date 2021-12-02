import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { empService } from '../emp.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  signupForm:FormGroup
  genders = ['Male','Female']
  isnewtocompany = ['yes','no']
  constructor(public empService:empService) { }

  ngOnInit() {

    this.signupForm = new FormGroup ({
      'username' : new FormControl(null,[Validators.required]),
      'company' : new FormControl(null,[Validators.required]),
      'area' : new FormControl('',Validators.required),
      'gender': new FormControl('Male'),
      'newtocompany': new FormControl('yes'),
      'mno': new FormControl('',[Validators.required,Validators.pattern('^((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{3}$')])


    })
  }

  onsubmit() {
     
    let forms1 = this.signupForm.value;
    console.log(forms1);
     
    this.empService.addEmp(forms1)

  
   

    
  

  }

}

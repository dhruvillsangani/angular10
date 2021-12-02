import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'videoex';
 genders = ['Male','Female'];
 signupForm:FormGroup;


 ngOnInit() {

  this.signupForm = new FormGroup ({

      'username':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender':new FormControl('Male')

  });
  
}

onSubmit() {
console.log(this.signupForm);

}
}

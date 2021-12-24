import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor( public formBuilder: FormBuilder,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        firstname: new FormControl(
          '',
          Validators.compose([Validators.required])
        ),
        familyname: new FormControl(
          '',
          Validators.compose([Validators.required])
        ),
        email: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^[A-Za-z0-9._%+-]+@prominentpixel.com$'),
          ])
        ),
      
        password: new FormControl(
          '',
          Validators.compose([Validators.required])
        ),
        confirmpassword: new FormControl(
          '',
          Validators.compose([Validators.required])
        ),
      },
      {
        validators: this.password.bind(this),
      }
    );
  }
 
  password(formGroup: FormGroup): any {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  onsubmit(signupForm){
    console.log(signupForm);
    this.router.navigate(['/login'], { relativeTo: this.route });

  }
}



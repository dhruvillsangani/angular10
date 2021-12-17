import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        fullname: new FormControl(
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
        username: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z]([._-]?[a-zA-Z0-9]+)*$'),
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
  onsubmit(): void {
    const forms1 = this.signupForm.value;
    console.log(forms1);
    this.router.navigate(['/login'], { relativeTo: this.route });
  }

  password(formGroup: FormGroup): any {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
}

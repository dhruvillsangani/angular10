import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isusername = true;
  isemail = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  onsubmit(contactForm): any {
    this.loginService.getname(contactForm.username);
    this.router.navigate(['/blog'], { relativeTo: this.route });
  }
  onChange(value): void {
    if (value === 'username') {
      this.isusername = true;
      this.isemail = false;
    } else if (value === 'email') {
      this.isemail = true;
      this.isusername = false;
    }
  }
}

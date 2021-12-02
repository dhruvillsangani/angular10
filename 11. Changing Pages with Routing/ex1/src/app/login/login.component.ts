import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private loginService:loginService , private router:Router) { }

  ngOnInit(): void {
  }

  onSubmitted(uname,upass) {

    let username = uname.value;
    let password = upass.value;

    this.loginService.username1 = username;
    this.loginService.getname(username);
    this.router.navigate(['jobs']);      
     
     


  }
}

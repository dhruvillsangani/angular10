import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isusername:boolean =true;
  isemail:boolean=false;
  
  constructor(private route:ActivatedRoute,private router:Router,private LoginService:LoginService) {
 }
  
  ngOnInit(): void {
  }

 
  onsubmit(contactForm) {
    console.log(contactForm);
    let uname = contactForm.username;
    console.log(uname);
    this.LoginService.getname(uname);
    this.router.navigate(['/blog'],{relativeTo: this.route});
  }
  onChange(value){
    if(value=='username') {
      this.isusername = true;
      this.isemail=false;
    }
    else if (value=='email'){
      this.isemail = true;
      this.isusername=false;
    }
  }

}

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName = ''
  password:any;
  isLoggedIn = false;
  constructor(private router:Router,
    private route:ActivatedRoute) { }
  

  getLoginDetails(loginDetails){
 this.isLoggedIn = true;
    this.userName = loginDetails.email;
    this.password = loginDetails.password;
    // console.log(this.userName);
    // console.log(this.password);
  }

  onLogout(){
    this.isLoggedIn=false;
    this.userName = '';
    // this.router.navigate()
  
  }
}

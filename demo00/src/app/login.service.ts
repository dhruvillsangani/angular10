import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { promise } from 'selenium-webdriver';
import { AuthguardService } from './authguard.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  subject =new Subject<any>();  
  uname = '';
  loggedIn = false;

  constructor() {}
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // this.loggedIn = true;
        resolve(this.loggedIn);
      }, 100);
    });
    return promise;
  }

  logout() {
    this.loggedIn = false;
    this.uname = '';
   

  }

  getname(username:any) {
    this.uname = username;
    this.loggedIn = true;
    console.log(this.uname);
    
  }
 
}

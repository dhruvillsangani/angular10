import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { promise } from 'selenium-webdriver';
import { AuthguardService } from './authguard.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  subject = new Subject<any>();
  uname = '';
  loggedIn = false;

  constructor() {}
  isAuthenticated(): any {
    const promisee = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 100);
    });
    return promisee;
  }

  logout(): any {
    this.loggedIn = false;
    this.uname = '';
    this.subject.next();
  }

  getname(username: any): any {
    this.uname = username;
    this.loggedIn = true;
    console.log(this.uname);

  }

}

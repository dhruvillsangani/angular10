import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { promise } from 'selenium-webdriver';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  uname = '';
  loggedIn: boolean = true;

  constructor() {}
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 100);
    });
    return promise;
  }

  getname(username) {
    this.uname = username;
    console.log(this.uname);
  }
}

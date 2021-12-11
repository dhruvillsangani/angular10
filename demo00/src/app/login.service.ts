import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  uname = '';

  constructor() {}

  getname(username) {
    this.uname = username;
    console.log(this.uname);
  }
}

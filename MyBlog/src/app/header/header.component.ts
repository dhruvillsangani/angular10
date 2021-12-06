import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
name:string;
  constructor(public LoginService:LoginService) { }

  ngOnInit(): void {
    this.name = this.LoginService.uname
    console.log(this.name);
    
    
  }

}

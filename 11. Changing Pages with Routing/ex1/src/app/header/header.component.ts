import { Component, OnInit } from '@angular/core';
import { loginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  ngOnInit(): void {
    
  }

  constructor(public loginService: loginService) {
     
     
  }

  

  
}



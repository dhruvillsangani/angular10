import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {
     }

  ngOnInit(): void {
    this.loginService.logout();
    this.router.navigate(['blog']);
  }

}

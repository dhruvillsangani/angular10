import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name: string;
  subscription: Subscription;
  img ='https://media-exp1.licdn.com/dms/image/C511BAQGrQ2fnb6JP8g/company-background_10000/0/1575817060437?e=2159024400&v=beta&t=IfLsvX5Z6fwDQZzT0z36Hk0pPbZebkicQ_ggJPPZRTE';
  logout: boolean = false;
  login: boolean = true;
  constructor(
    public LoginService: LoginService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'fr', 'hi']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|hi/) ? browserLang : 'en');
  }
  ngOnInit(): void {
    
  }
  onLogout(){
    this.LoginService.logout();
  }
}

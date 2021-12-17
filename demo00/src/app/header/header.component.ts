import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name: string;
  subscription: Subscription;
  img = 'https://media-exp1.licdn.com/dms/image/C511BAQGrQ2fnb6JP8g/company-background_10000/0/1575817060437?e=2159024400&v=beta&t=IfLsvX5Z6fwDQZzT0z36Hk0pPbZebkicQ_ggJPPZRTE';
  logout = false;
  login = true;
  constructor(
    public loginService: LoginService,
    public translate: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    translate.addLangs(['en', 'fr', 'hi']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|hi/) ? browserLang : 'en');
  }
  ngOnInit(): void {
  }
  onLogout(): void{
    this.loginService.logout();
  }
  onMyBlog(): void{
    if (this.loginService.uname === ''){
      alert('login to add blog');
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
  }
}

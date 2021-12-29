import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild }from'@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginPopupComponent } from '../modal/login-popup/login-popup.component';
import { LoginService } from '../shared/login.service';
import { FetchServiceService } from '../shared/fetch-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isshown = true;
  imgurl:any
  constructor(private router:Router,
    private route:ActivatedRoute,
    public modelService: NgbModal,
    public loginService:LoginService,
    public fetchService:FetchServiceService) { 
     

    }
  ngOnInit(): void {
    this.fetchService.autoLogin();
  }

  onLogin(){
   this.modelService.open(LoginPopupComponent)
  }
  onLogout(){
  
    
  }

}



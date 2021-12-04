import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";
import { loginService } from './login.service';
import {map} from 'rxjs/operators'


@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate {

    constructor(private loginService:loginService,private router:Router) {}

    
    canActivate(
    route: ActivatedRouteSnapshot, 
    router: RouterStateSnapshot
    ): boolean |Observable<boolean> | Promise<boolean> {
        return this.loginService.isAuthenticated().then((authenticated: boolean) => {
            if (authenticated) {
                return true;
            } else {
                alert("Login To Access");
                this.router.navigate(['/']);
            }
        });
       
       
    
    }
    
}
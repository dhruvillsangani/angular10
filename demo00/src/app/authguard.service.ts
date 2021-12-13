import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private LoginService:LoginService,private route:Router) { }
  // canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean | Promise<boolean> {
//     var isAuthenticated = this.authService.getAuthStatus();
//     if (!isAuthenticated) {
//         this.router.navigate(['/login']);
//     }
//     return isAuthenticated;
// }

  canActivate(
    route: ActivatedRouteSnapshot, 
    router: RouterStateSnapshot
    ): boolean |Observable<boolean> | Promise<boolean> {
        return this.LoginService.isAuthenticated().then((authenticated: boolean) => {
            if (authenticated) {
                return true;
            } else {
                alert("Login To Access");
                this.route.navigate(['login']);
            }
        });

      }


}

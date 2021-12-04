 import { Injectable,EventEmitter, Output } from "@angular/core";
import { rejects } from "assert";
import { resolve } from "dns";
import { promise } from "selenium-webdriver";
import { AuthGuard } from "./authguard.service";

 @Injectable({
     providedIn: 'root'
 })
 export class loginService {
         username1:any;
        loggedIn = false;

       isAuthenticated() {
           const promise = new Promise((resolve,reject)=> {
               setTimeout(()=> {
                   resolve(this.loggedIn)
               },100);
           }
           );
           return promise;
       }

       


         getname(uname) {
             this.loggedIn = true;
            


            this.username1 = uname;
        //  console.log(this.username1 );
        //  console.log(uname+"from service");
             
         }

           
    
 }
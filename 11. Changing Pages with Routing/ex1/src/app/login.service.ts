 import { Injectable,EventEmitter, Output } from "@angular/core";

 @Injectable({
     providedIn: 'root'
 })
 export class loginService {
         username1 = '';



         getname(uname) {
            
            // this.username = uname;
            // console.log(this.username);

             console.log(uname+"from service");
             
         }

           
    
 }
import { Injectable, OnInit } from "@angular/core";

@Injectable({providedIn: 'root'}) 

export class formsService implements OnInit{
 
       

      
    arr = [{username:"Dhruvil",company:'prominentpixel',area:'rajkot',gender:'male',isnewtocompany:'yes',mno:'919999999'}];
       
    ngOnInit() {
           
        }

        addEmp(details) {

            this.arr.push(details);
            console.log(details);
        }
 

    
}
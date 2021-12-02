
import { Component, OnInit,OnChanges, SimpleChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked ,OnDestroy} from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { console.log("Constructor called!");
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
 
   
  ngOnInit(): void {
    console.log("ngOnInIt called");
  }

  // OnChanges(changes: SimpleChanges):void {
  //   console.log("Onchanges called!");
    
  // }
ngDoCheck() {
  console.log("ngDocheck called!");
  
}
ngAfterContentInit () {
  console.log("AfterContentInit called!");
 
}
ngAfterContentChecked() {
  console.log("AfterContentChecked called!");
  
}


ngAfterViewInit() {
console.log("AfterViewInit called!");

}

ngAfterViewChecked() {

console.log("AfterViewChecked called");


}


ngOnDestroy() {

  console.log("ngondestroy called");
  
}







  Elements =[{name:'Dhruvil',content:'Sangani',country:'India'}];

  submited(Data:{fname:string,lname:string,cname:string}) {

    this.Elements.push({
      
      name:Data.fname,
      content:Data.lname,
      country:Data.cname
    });
  }


  destroy() {
         
    this.Elements.splice(0,1);

  }

}

import { Component, OnInit,EventEmitter,Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

@Output() details = new EventEmitter <{fname:string,lname:string,cname:string} > ();

@ViewChild('fele') fele :ElementRef;
@ViewChild('inputele') inputele :ElementRef;
  // fname='';
  // lname='';
  cname='';

  constructor() { }

  ngOnInit(): void {
  }

  userCreated(input : HTMLInputElement) {
    console.log(this.inputele);
    console.log(input.value);
    this.details.emit({
      fname:input.value,
      lname:this.fele.nativeElement.value,
      cname:this.cname
    });
   
     

  }

}

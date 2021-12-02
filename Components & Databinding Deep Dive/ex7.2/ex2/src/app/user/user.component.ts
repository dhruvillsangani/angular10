import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  firstname = '';
  familyname= '';
  cname='';

  @Output() newItemEvent = new EventEmitter<
  {firstname:string,
  familyname:string,
  cname:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  userCreated() {
    this.newItemEvent.emit({
      firstname :  this.firstname,
      familyname: this.familyname,
      cname:this.cname
    });
   
   
    // this.firstname = '';
    // this.familyname = '';
    // this.cname = '';
    // this.newItemEvent.emit(this.familyname);
    // this.newItemEvent.emit(this.cname);

  }

}

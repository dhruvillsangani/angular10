import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/blog.service';




@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  imageurl:string;
  constructor(public LoginService:LoginService) { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'java' },
      { item_id: 2, item_text: 'Javascript' },
      { item_id: 3, item_text: 'C++' },
    ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect() {

  }

  onsubmit(details) {
   console.log(details);
   
  }

}

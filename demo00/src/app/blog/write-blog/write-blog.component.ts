import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



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
  constructor(public LoginService:LoginService,private BlogService:BlogService,
    private router:Router,
    private route:ActivatedRoute) { }

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
 
  onsubmit(details) {

   let date = new Date().toString();
   let title = details.title;
   let description = details.description;
   let tags= details.tags;
   let imageurl = details.imageurl;
   let author = details.author;
   let id = this.BlogService.getBlogLength()+1;
    this.BlogService.addData(id,title,imageurl,description,author,tags,date)
    this.router.navigate(['../'],{relativeTo: this.route});
   
  }

}

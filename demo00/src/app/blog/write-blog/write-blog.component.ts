import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css'],
})
export class WriteBlogComponent implements OnInit {
  languageList = [];
  selectedItems = [];
  languageSettings = {};
  imageurl: string;
  constructor(
    public LoginService: LoginService,
    private BlogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this. languageList = [
      { language_id: 1, language_text: 'java' },
      { language_id: 2, language_text: 'Javascript' },
      { language_id: 3, language_text: 'C++' },
    ];
    this.languageSettings = {
      singleSelection: false,
      idField: 'language_id',
      textField: 'language_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  onSubmit(details) {
     details.id =this.BlogService.getBlogLength()
     let time =  new Date().toString();
     details.date = time;
    this.BlogService.addData(details);
    console.log(details);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
 
}

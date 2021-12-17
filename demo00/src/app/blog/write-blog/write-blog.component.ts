import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { NgForm } from '@angular/forms';
import { BlogService } from 'src/app/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerConfig, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css'],
})
export class WriteBlogComponent implements OnInit {
  public Editor = ClassicEditor;
  languageList = [];
  selectedItems = [];
  languageSettings = {};
  imageurl: string;
  model: any;
  // bsConfig: Partial<BsDatepickerConfig> = {
// 	dateInputFormat: 'YYYY-MM-DD',
// 	showWeekNumbers: false,
// 	containerClass: 'theme-dark-blue'
// };
  constructor(
    public loginService: LoginService,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): any {
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
  yourfunction(){
    this.router.navigate(['/login'], { relativeTo: this.route });

  }

  onSubmit(details): any {
    if (this.loginService.uname === ''){
      alert('login to add blog');
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
    else{
    details.date.toString();
    console.log(details.date);
    details.id = this.blogService.getBlogLength();
    this.blogService.addData(details);
    console.log(details);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  }
}

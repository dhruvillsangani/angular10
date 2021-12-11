import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
 
} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent implements OnInit {
  languageList = [];
  languageSettings = {};
  selectedItems = [];
  imageurl: string;
  closeModal: string;
  id: number;
  blogs = {
    id: 0,
    title: 'title1',
    imageurl:
    'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'description1',
    author: 'author1',
    languages: [{ language_id: 1, language_text: 'java' }],
    date: '12-12-12',
  };

  constructor(
    private modalService: NgbModal,
    private LoginService: LoginService,
    public BlogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.blogs = this.BlogService.getBlogId(this.id);
      console.log(this.blogs);
    });

    this.languageList = [
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

  open(blogContent) {
    this.modalService
      .open(blogContent, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (res) => {
          this.closeModal = `Closed with: ${res}`;
        },
        (res) => {
          this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(blogFormContent) {
    let time = new Date().toString();
    this.BlogService.getEditedJob(this.id, blogFormContent.title,blogFormContent.imageurl,blogFormContent.description,blogFormContent.author, blogFormContent.languages,time );
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}

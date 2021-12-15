import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';
import { BlogService } from '../../blog.service';
import { BlogEditComponent } from '../blog-edit/blog-edit.component';


@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css'],
})
export class MyblogComponent implements OnInit {
  myBlog: any;
  myFinalBlog = [];
  authorName: any;
  modelOpen = false;


  constructor(
    private loginService: LoginService,
    private blogService: BlogService,
    private route: ActivatedRoute,
    private router : Router,
    private modelService: NgbModal
  ) {
    this.authorName = this.loginService.uname;
    console.log('From auth component' + this.authorName);
    this.myBlog = this.blogService.arr;
    for (let elements of this.blogService.arr) {
      if (this.authorName == elements.author) {
        this.myFinalBlog.push(elements);
      }
    }
  }

  ngOnInit(): void {
    this.blogService.subject.subscribe((e1)=>{
      this.authorName = this.loginService.uname;
      this.myFinalBlog=[];
    console.log('From auth component' + this.authorName);
    this.myBlog = this.blogService.arr;
    for (let elements of this.blogService.arr) {
      if (this.authorName == elements.author) {
        this.myFinalBlog.push(elements);
      }
    }
    })
    
  }

  onClick(id:number){
    this.router.navigate(['blog',id] );
  }
  onEdit(id: number) {
      const ref = this.modelService.open(BlogEditComponent, {
        size: 'lg',
        backdrop: false,
      });
      ref.componentInstance.parentID = id;
      ref.result.then(
        (result) => {
          console.log(result);
        },
        (reason) => {}
      );
  
  }
  onDelete(element){
    this.blogService.deletedBlog(element);
  }
}

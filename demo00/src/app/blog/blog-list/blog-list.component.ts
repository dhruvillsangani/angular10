import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogEditComponent } from '../blog-edit/blog-edit.component';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  modelOpen = false;

  constructor(
    public loginService: LoginService,
    public blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
    private modelService: NgbModal
  ) {}

  ngOnInit(): any {}

  onclick(id: number): any {
    this.router.navigate([id], { relativeTo: this.route });
  }
  onEdit(id: number, content): any {
  }

  onDelete(data: number): any {
    this.blogService.deletedBlog(data);
  }
}

import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { BlogService } from '../../blog.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  id: number;
  blogs: any;
  subject = new Subject<any>();
  constructor(private loginService: LoginService, public blogService: BlogService, private router: Router, private route:
    ActivatedRoute) { }

  ngOnInit(): void{
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id);
        this.blogs = this.blogService.getBlogId(this.id);
        console.log(this.blogs);
      }
    );
  }

  onPrevious(): void {

    if (this.id === 0) {
    alert('This is first blog');
    return;
    }
    this.router.navigate(['../', this.blogs.id - 1], {relativeTo: this.route});
  }

  onNext(): void{
    if (this.id === this.blogService.getBlogLength() - 1) {
      alert('this is last blog');
      return;
    }
    console.log(this.blogs.id);
    this.router.navigate(['../', this.blogs.id  + 1], { relativeTo: this.route});
  }
}

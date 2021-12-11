import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  constructor(
    public BlogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  onclick(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
  onEdit(id: number) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
    console.log(id);
  }
  onDelete(data: number) {
    this.BlogService.deletedBlog(data);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogEditComponent } from '../blog-edit/blog-edit.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  modelOpen = false;
  
  constructor(
    public BlogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,
    private modelService:NgbModal
  ) {}

  ngOnInit() {}

  onclick(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
  onEdit(id: number,content) {
    
    
    const modalRef = this.modelService.open(BlogEditComponent,
      {
        scrollable: true,
        
      });
      modalRef.componentInstance.parentID =id;
      modalRef.result.then((result) => {
        console.log(result);
      }, (reason) => {
      });
  }
  onDelete(data: number) {
    this.BlogService.deletedBlog(data);
  }
  openModal(){
   
  }
  
}

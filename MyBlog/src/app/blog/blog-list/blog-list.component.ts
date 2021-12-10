import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  ScrollDistance=2;
  ScrollThrottle=5;
  
  constructor(public BlogService:BlogService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(){
    
  }
 

  onclick(id:number) {
    this.router.navigate([id],{relativeTo: this.route});

  }
  onEdit(id:number) {
    this.router.navigate([id,'edit'],{relativeTo: this.route});
  }
onDelete(id:number) {}



}

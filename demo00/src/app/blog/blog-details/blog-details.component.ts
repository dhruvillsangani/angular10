import { Component, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../blog.service';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  id: number;
  blogs:any;

  constructor(private LoginService:LoginService,public BlogService:BlogService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id);
        this.blogs= this.BlogService.getBlogId(this.id)
        console.log(this.blogs);
      }
    );

    
  }
  

  onPrevious() {
    if(this.blogs.id ==0) {
    alert("This is first blog")
    return;
    }
    this.router.navigate(['../',this.blogs.id-1],{relativeTo: this.route});
  }

  onNext() {
    if(this.blogs.id == this.BlogService.getBlogLength()-1) {
      alert("this is last blog")
      return
    }
    console.log(this.blogs.id);
    
    this.router.navigate(['../',this.blogs.id+1],{relativeTo: this.route});
  }

}

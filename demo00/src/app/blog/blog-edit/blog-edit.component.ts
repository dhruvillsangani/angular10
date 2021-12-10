import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/login.service';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  id: number;
  blogarr = {id:0,title:"title1",imageurl:"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",description:"description1",author:"author1",tags:[{item_id: 1, item_text: 'java'}],date:"12-12-12"};

  constructor(private modalService: NgbModal,private LoginService:LoginService,public BlogService:BlogService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.blogarr= this.BlogService.getBlogId(this.id)
        console.log(this.blogarr);
      }
    );
  }

}



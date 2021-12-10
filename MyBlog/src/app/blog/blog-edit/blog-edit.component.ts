import { Component, OnInit } from '@angular/core';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { BlogService } from 'src/app/blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  constructor(public BlogService:BlogService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
  }

  openDialog(){}

}

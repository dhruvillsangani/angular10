import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { jobService } from 'src/app/job.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css'],
})
export class EditJobComponent implements OnInit {


    id:number;
   job = {id:1,title:'hello',Company:'sd',Place:'rjt',Time:'122112'};
   
  constructor(public jobService:jobService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(){
   
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.job = this.jobService.getjobsid(this.id);
        console.log(this.job); 
      }
    );

    console.log(this.id);
    this.jobService.getlengthofjob();  
  }

  postJob(title,company,place) {
    console.log(title);
    console.log(company);
    console.log(place);
    console.log(this.id);
    let time = new Date().toString();
    this.job.title = title;
     this.jobService.getEditedJob(this.id,title,company,place,time);

  }
  
  
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { jobService } from 'src/app/job.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  // jobs:any
  id:number;
   job = {id:1,title:'hello',Company:'sd',Place:'rjt',Time:'122112'};

    // job = this.jobService.jobs;
    // @Output() jobSelected = new EventEmitter<void> ();

  constructor(public jobService:jobService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // this.id = +this.route.snapshot.params['id'];

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
  

}

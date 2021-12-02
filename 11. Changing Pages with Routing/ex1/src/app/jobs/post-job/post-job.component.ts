import { Component, OnInit } from '@angular/core';
import { jobService } from 'src/app/job.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
   
   
   

  constructor(public jobService:jobService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  postJob(title:string,company:string,place:string){
    var time= new Date().toString();
    var id=this.jobService.getlengthofjob()+1;
    this.jobService.addJobs(id,title,company,place,time);
    // this.router.navigate(['jobs'],{relativeTo: this.route});

  }

}

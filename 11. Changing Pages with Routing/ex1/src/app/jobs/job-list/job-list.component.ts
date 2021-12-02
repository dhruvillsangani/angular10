import { Component, OnInit } from '@angular/core';
import { jobService } from 'src/app/job.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  

  constructor(public jobService:jobService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    
  }
  onclick(id:number){

    this.router.navigate([id],{relativeTo: this.route});

  }
  onEdit(id:number) {
    this.router.navigate([id,'edit'],{relativeTo: this.route})
  }

  

  // onclick() {
  // this.route.navigate(['new'],{relativeTo:this.route})
  // }

}

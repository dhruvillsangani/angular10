import { Component, OnInit } from '@angular/core';
import { jobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  clicked:boolean=false;
  constructor(public jobService:jobService) { }

  ngOnInit(): void {
  }

}

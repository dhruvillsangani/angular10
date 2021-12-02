import { Component, OnInit } from '@angular/core';
import { empService } from '../emp.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(public empService:empService) { }

  ngOnInit() {
      

  }

}

import { Component, OnInit } from '@angular/core';
import { formsService } from '../forms.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(public formsService:formsService) { }

  ngOnInit(): void {
  }

}

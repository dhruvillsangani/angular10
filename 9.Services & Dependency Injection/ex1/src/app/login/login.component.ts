import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
 

  constructor( private studentService:StudentService) { }

  ngOnInit(): void {
  }

  onSubmitted(sname:string,school:string) {
    let  date = new Date().toString();
    this.studentService.addStudent(sname,school,date);
  }
 


}

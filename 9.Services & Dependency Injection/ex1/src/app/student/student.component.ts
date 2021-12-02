import { Component, OnInit} from '@angular/core';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
 
})
export class StudentComponent implements OnInit {
  // students:{name:string,school:string,date:string}[];

  constructor(public studentService:StudentService) { }

  ngOnInit():void {
   
  //  this.students = this.studentService.getStudents() ;
  //  console.log(this.students);
   
 
  }
  

}

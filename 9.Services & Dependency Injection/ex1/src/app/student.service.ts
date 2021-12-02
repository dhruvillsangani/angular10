
export class StudentService {

    students = [
        {name:'Dhruvil Sangani',school:'Dholakiya', date:'Thu Nov 25 2021 10:50:55 GMT+0530'},
        {name:'Dhruvil ',     school:'Modi',       date:'Thu Nov 20 2021 10:50:55 GMT+0530'}

    ]
constructor() {
    console.log("this is service");
}

addStudent(studentname:string,schoolname:string,logintime:string) {

    this.students.push({name:studentname,school:schoolname,date:logintime});
    console.log(this.students);
    
}

getStudents(){
    return this.students;
}

}
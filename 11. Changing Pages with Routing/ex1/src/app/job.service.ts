import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'}) 


export class jobService {

jobs = [{id:1,title:'c',Company:'pp',Place:'Rajkot',Time:'26/12/2021'},
        {id:2,title:'java',Company:'pp',Place:'Rajkot',Time:'26/12/2021'}
];


addJobs(id1:number,title1:string,company1:string,place1:string,time1:string){

    this.jobs.push({id:id1,title:title1,Company:company1,Place:place1,Time:time1})
    console.log(this.jobs);
    

}

getlengthofjob(){
    return this.jobs.length;

}
getjobsid(id:number){

    return this.jobs[id-1];
}

getEditedJob(id,title,company,place,time) {
//    from edit component write logical part

const index =this.jobs.findIndex((el) => el.id === id) 
this.jobs[index] = {
    id: id,
    title:title,
    Company:company,
    Place:place,
    Time:time
    
  }
//   console.log(this.jobs);
  
      
}



}
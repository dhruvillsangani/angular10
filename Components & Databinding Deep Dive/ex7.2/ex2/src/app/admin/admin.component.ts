import { Component,Input,OnChanges,OnInit,ViewChild} from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{


   obj=[{
    firstname :'',
    familyname : '',
    cname :''

   }]; 
   
  

  constructor() { }
  

  receivedUser(event){
    
   this.obj = event;
    console.log(event);
  }


}

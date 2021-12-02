import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component ({

    selector:'butt-selector',
    templateUrl:'../buttonExample/button.component.html'

})

export class buttoon implements OnInit {


    

     Username='';
     arr=[];
 name='';

     getData(event:Event){
        console.log( this.name =(<HTMLInputElement> event.target).value);

    }
    onAdd(){
        this.arr.push(this.Username);
        console.log(this.arr);

        this.Username="";

    }
    ngOnInit(){}
}

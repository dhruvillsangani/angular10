import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
 
 
  title = 'ex13';
  arr=['1','2','hello','my','name','is','dhruvil','sangani','....'];
  private subs:Subscription;


  ngOnInit(){
    
      const customobservable = Observable.create(observer => {
            
        setInterval(
          () => {
            let randomnumber = this.arr[Math.floor(Math.random()*9)];
            
            if(randomnumber ==this.arr[4] ){
              // console.log(this.arr[3]);
              
              observer.error("Do not use this..");
            } else if(randomnumber == this.arr[7]){
              // console.log(this.arr[7]);
              
              observer.complete();
            }else {
              observer.next(randomnumber);
            }
          }, 1500);
      });


     this.subs = customobservable.subscribe((data: Number) => {
        console.log("Next Number: " + data);
       },
         error => {
       console.log(error);
      }, ()=>{
         console.log("Observable Completed");
       }
       );

      }

      ngOnDestroy() {
       this.subs.unsubscribe();
      }
    

  }
 









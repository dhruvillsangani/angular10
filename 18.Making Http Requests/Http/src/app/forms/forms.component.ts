import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { empService } from '../emp.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  loadedPosts  = []; 
  signupForm:FormGroup
  genders = ['Male','Female']
  isnewtocompany = ['yes','no']
  constructor(public empService:empService,private http: HttpClient) { }

  ngOnInit() {

    this.signupForm = new FormGroup ({
      'username' : new FormControl(null,[Validators.required]),
      'company' : new FormControl(null,[Validators.required]),
      'area' : new FormControl('',Validators.required),
      'gender': new FormControl('Male'),
      'newtocompany': new FormControl('yes'),
      'mno': new FormControl('',[Validators.required])


    })
  }

  onsubmit() {
     
    let forms1 = this.signupForm.value;
    // console.log(forms1); 
    this.empService.addEmp(forms1)
    this.http.post('https://demoproject-4d24d-default-rtdb.firebaseio.com/posts.json',
    forms1).subscribe(responseData => {
      console.log(responseData);
    })
   
   } 

   onFetchPosts() {

    this.http.get('https://demoproject-4d24d-default-rtdb.firebaseio.com/posts.json')
    .pipe(
      map( (responseData) => {
        console.log(responseData);

      const postArray = [];
      for(let key in responseData) {
          if (responseData.hasOwnProperty(key)) {
                   
        postArray.push({...responseData[key], id:key})

        console.log(postArray);
        
    
      }
      }
      return postArray;
    }))
    .subscribe(posts => {

       this.loadedPosts = posts
       console.log(this.loadedPosts);
       
      console.log(posts);
      
    });
  }

  onClearPosts() {

    this.http
      .delete('https://demoproject-4d24d-default-rtdb.firebaseio.com/posts.json', {
        observe: 'events',
        responseType: 'text'
      }).pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        
        })
      ).subscribe(() => {
        this.loadedPosts = [];
      });

  }








   }
  



import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FetchServiceService implements OnInit {
  arr = [];
  tokens = [];
  token:any;
  image:any;
  governatePosts: any;
  postOfficeCity: any;
  expcountry: any;
  imageId:any;
  access_token:any;
  country:any;
  governates:any;
  wilayat:any
  countryId:any;
  imageID:any;
  nationality:any
  empType:any
  Experiencegovernates:any;
  expwilayat:any;
currentUserDetails:any;
subject = new Subject<any>();
constructor(private http:HttpClient) { }
  ngOnInit(): void {
      
  }
getToken(token){

  console.log(token.access_token);
  console.log(this.currentUserDetails);
  
  this.token = token.access_token;
  const user = new User(
    this.token,
    this.currentUserDetails
  )
localStorage.setItem('ALL_DATA',JSON.stringify(user))
}

autoLogin(){
  let userData:{TOKEN:any,USER_DETAIL:any} = JSON.parse(localStorage.getItem('ALL_DATA'))
  let loadedUser = new User(userData.TOKEN,userData.USER_DETAIL);
  if(!loadedUser){
    this.subject.next(loadedUser)
  }
  console.log(loadedUser)
}
  fetchDetails(){
 
    
    this.http.get('http://103.86.16.120:8086/api/user-profile/2/173/-1?isFromHistory=false&jobApplyId=0',{headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)})
    .subscribe(posts=>{
      this.arr.push(posts);
      console.log(this.arr);   
    })
    this.subject.next();
  }

  fetchImage(){


    this.http.get(`http://103.86.16.120:8086/api/file-info/file/USER/${this.imageID}`,
    {headers: new HttpHeaders().set('Authorization', 'Bearer yDAglGgio0cmoxUisVAXIS8HXds'),
     responseType: 'blob' })
    .subscribe(postImage=>{
    //  console.log(postImage);
  
    var reader = new FileReader();
    reader.readAsDataURL(postImage);
    var base64String
    reader.onloadend = () =>{
     base64String = reader.result; 
     this.image =base64String;
    //  console.log(this.image);

       }

    })
this.subject.next();
  }


  getCountry(){
    this.http.get('http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy/Countries')
    .subscribe(post=>{
     console.log(post);
     this.country = post;

    })
  }
  getNationality(){
    this.http.get('http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy/Countries')
    .subscribe(posts=>{
     this.nationality = posts;
    //  console.log(this.country);

    })

  }

  getGovernates(){
    this.http.get('http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy/Governorates')
    .subscribe(governate=>{
      this.governates = governate;
      console.log(this.governates);
      
    })

  }
  getGovernoratePost(){
    this.http.get('http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy/Governorates')
    .subscribe(governates=>{
      this.governatePosts = governates;
      // console.log(this.governates);
      
    })
  }
  getgovernatePosts(){

    this.http.get('http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy/Governorates')
    .subscribe(governates=>{
      this.postOfficeCity = governates;
  
      
    })

  }

  getWilayat(){
    this.http.get('http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy-by-parent/Governorates/253')
    .subscribe(wilayates=>{
      this.wilayat = wilayates
      console.log(this.wilayat);
      
    })
  }

  getEditModalDetails(editDetails){
      console.log(editDetails);

      
  }

  experienceConuntry(){
    this.http.get('http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy/Countries')
    .subscribe(countryies=>{
     
     this.expcountry = countryies;
     console.log(this.expcountry);

    })
  }

  getEmployementType(){
    this.http.get('http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy/Employment%20Type')
    .subscribe(emptype => {
      this.empType = emptype;
    })
  }


  getExperienceGovernate(){
    this.http.get('http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy/Governorates')
    .subscribe(Experiencegovernates=>{
      this.Experiencegovernates = Experiencegovernates;
    })
  }
  getExperienceWilayat(){
    this.http.get('http://103.86.16.120:8086/pub/api/taxonomy/2/get-taxonomy-by-parent/Governorates/253')
    .subscribe(wilayates=>{
      this.expwilayat = wilayates
      console.log(this.expwilayat);
      
    })
  }

}

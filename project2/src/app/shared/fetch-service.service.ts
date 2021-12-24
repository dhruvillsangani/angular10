import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {
  arr = [];
  tokens = [];
  image:any;
  governatePosts: any;
  postOfficeCity: any;
  constructor(private http:HttpClient) { }
  access_token:any;
  country:any;
  governates:any;
  wilayat:any
  countryId:any;
  imageID:any;
  nationality:any

  fetchDetails(){
    for(let elements of this.tokens){
      this.access_token = elements.access_token;
      console.log(this.access_token); 
    }
    this.http.get('http://103.86.16.120:8086/api/user-profile/2/173/-1?isFromHistory=false&jobApplyId=0',{headers: new HttpHeaders().set('Authorization', 'Bearer yDAglGgio0cmoxUisVAXIS8HXds')})
    .subscribe(posts=>{
      this.arr.push(posts);
      console.log(this.arr);
     
     
    })
  }

  fetchImage(){

 console.log(this.imageID);
 

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

}

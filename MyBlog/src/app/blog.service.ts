import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  arr = [{id:0,title:"title1",imageurl:"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",description:"description1",author:"author1",tags:{lid:"01",ltext:"ltext1"},date:Date},
         {id:1,title:"title2",imageurl:"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",description:"description2",author:"author2",tags:{lid:"02",ltext:"ltext2"},date:Date}]


}

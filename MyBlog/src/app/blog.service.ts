import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  arr = [
    {id:1,
      title:"title1",
      imageurl:"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description:"description1",
      author:"author1",
      tags:[{item_id: 1, item_text: 'java'}],
      date:"12-12-12"}
      ,
         {id:2,title:"title2",imageurl:"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",description:"description2",author:"author2",tags:[{item_id: 1, item_text: 'java2'}],date:"12-12-12"}]



    addData(id:number,title:string,imageurl:string,description:string,author:string,tags:[{item_id: number, item_text:string}],date:string){
        this.arr.push({id:id,title:title,imageurl:imageurl,description:description,author:author,tags:tags,date:date})
    }

    getBlogLength(){
      return this.arr.length;
    }

    getBlogId(id:number) {
      return this.arr[id-1];
    }
  }

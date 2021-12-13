import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor() {}
  obj:any;
  subject =new Subject<any>();  

  arr = [
    // {
    //   id: 0,
    //   title: 'title1',
    //   imageurl:
    //     'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //   description: 'description1',
    //   author: 'author1',
    //   languages: [{ language_id: 1, language_text: 'java' }],
    //   date: '12-12-12',
    // },
    // {
    //   id: 1,
    //   title: 'title2',
    //   imageurl:
    //     'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //   description: 'description2',
    //   author: 'author1',
    //   languages: [{ language_id: 1, language_text: 'java2' }],
    //   date: '12-12-12',
    // },

    // {
    //   id: 2,
    //   title: 'title3',
    //   imageurl:
    //     'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    //   description: 'description3',
    //   author: 'author3',
    //   languages: [{ language_id: 1, language_text: 'java2' }],
    //   date: '12-12-12',
    // },
  ];

  addData(details) {
    console.log(details);
    this.arr.push(details);
    console.log(this.arr.length);
  }

  getBlogLength() {
    return this.arr.length;
    console.log(this.arr.length);
  }

  getBlogId(id: number) {
    return this.arr[id];
  }

  getEditedJob(id, title, imageurl, description, author, languages, date) {
    const index = this.arr.findIndex((el) => el.id === id);
    this.arr[index] = {
      id: id,
      title: title,
      imageurl: imageurl,
      description: description,
      author: author,
      languages: languages,
      date: date,
    };
  }

  deletedBlog(data1) {
    const index = this.arr.indexOf(data1);
    this.arr.splice(index, 1);
    this.subject.next();
    console.log(this.arr.length);
    // this.getBlogLength();
    
  }

  // getBlogByAuthor(author){
  //   /*let obj1 = this.arr.filter(obj => obj.author == author)
  //   for(let elements of obj1) {
  //     this.obj = elements;
  //   }*/
  //   for(let elements of this.arr) {
  //     if(elements.author==author){
  //       return elements;
  //     }
  //   }
  //   console.log(this.obj);
  // }
}

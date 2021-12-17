import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor() {}
  obj: any;
  subject = new Subject<any>();

  arr = [
    {
      id: 0,
      title: 'title1',
      imageurl:
        'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'description1',
      author: 'author1',
      languages: [{ language_id: 1, language_text: 'java' }],
      date: '12-12-12',
    },
    {
      id: 1,
      title: 'title2',
      imageurl:
        'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'description2',
      author: 'author1',
      languages: [{ language_id: 1, language_text: 'java2' }],
      date: '12-12-12',
    },

    {
      id: 2,
      title: 'title3',
      imageurl:
        'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'description3',
      author: 'author3',
      languages: [{ language_id: 1, language_text: 'java2' }],
      date: '12-12-12',
    },
  ];

  addData(details): any {
    console.log(details);
    this.arr.push(details);
    console.log(this.arr.length);
  }

  getBlogLength(): any {
    return this.arr.length;
    console.log(this.arr.length);
  }

  getBlogId(id: number): any {
    return this.arr[id];
  }

  getEditedJob(blogFormContent): any {
    const index = this.arr.findIndex((el) => el.id === blogFormContent.id);
    this.arr[index] = {
      id: blogFormContent.id,
      title: blogFormContent.title,
      imageurl: blogFormContent.imageurl,
      description: blogFormContent.description,
      author: blogFormContent.author,
      languages: blogFormContent.languages,
      date: blogFormContent.date,
    };
    this.subject.next();
    console.log(this.arr);
  }

  deletedBlog(data1): any {
    const index = this.arr.indexOf(data1);
    this.arr.splice(index, 1);
    this.subject.next();
    console.log(this.arr.length);

  }


}

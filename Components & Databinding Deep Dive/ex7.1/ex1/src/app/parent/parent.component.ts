import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  colorName:String [] = ['blue','green','white','skyblue','purple'];

  constructor() { }

  ngOnInit(): void {
  }

}

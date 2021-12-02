import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ex1';

  arr=([{colour: "Red",text:"text1"},
        {colour: "blue",text:"text2"},
        {colour: "green",text:"text3"},
        {colour: "skyblue",text:"text4"}]);
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title:'p2';
  serverElements =[{type:'test',name:'testserver',content:'connected'}];

  onServerAdded(serverData:{serverName:string,serverContent:string}) {

    this.serverElements.push({
      type: 'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }

  
    onBlueprintAdded(serverBlueprint:{serverName:string,serverContent:string}) {

        this.serverElements.push({
          type:'blueprint',
          name:serverBlueprint.serverName,
          content: serverBlueprint.serverContent
        });

      
    }



}



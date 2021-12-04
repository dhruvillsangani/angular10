import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent} from './dynamic/dynamic.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'dynamiccomponent';
  @ViewChild('container', { read: ViewContainerRef })  
  container: ViewContainerRef;  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  add(): void {  

    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);  
 
    const componentRef = this.container.createComponent(dynamicComponentFactory);  
  }
}

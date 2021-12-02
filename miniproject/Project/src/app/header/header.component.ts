import { Component,EventEmitter,Output } from "@angular/core";

@Component({
    
    selector:'header',
    templateUrl:'../header/header.component.html'

})

export class Header {

  @Output()  Featureselected = new EventEmitter<string>();

    onSelect(Feature:string) {

        this.Featureselected.emit(Feature);



    }


}
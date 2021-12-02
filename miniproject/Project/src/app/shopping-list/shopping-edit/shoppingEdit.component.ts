import { Component, ElementRef, ViewChild,EventEmitter, Output } from "@angular/core";
import { Ingredient } from '../../shared/ingredient.model';


@Component ({

    selector:'shopping-edit',
    templateUrl:'../shopping-edit/shoppingEdit.component.html'
})

export class ShoppingEditComponent {

  @ViewChild('nameInput') inputRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;

 @Output() ingredientsAdded = new EventEmitter<Ingredient>();




    onAddItem(){

        const ingName = this.inputRef.nativeElement.value;
        const  ingAmount = this.amountRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName,ingAmount);

        this.ingredientsAdded.emit(newIngredient);

    }



}
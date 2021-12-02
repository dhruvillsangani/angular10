import { Component, Input,EventEmitter, Output } from "@angular/core";

import { Recipe } from "../../recipe.model";

@Component({
    selector:'receipes-item',
    templateUrl:'../recipes-item/recipesItem.component.html'

})

export class RecipesItemComponent {
    @Input() recipe: Recipe;
    @Output() recipesSelected = new EventEmitter<void> ();
    onSelected() {

        this.recipesSelected.emit();

    }
    
}
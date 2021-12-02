import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

 ingredient: Ingredient [] = [

  new Ingredient('Apple',5),
  new Ingredient('Tomato',2)


 ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredeient:Ingredient) {

    this.ingredient.push(ingredeient);

  }

}

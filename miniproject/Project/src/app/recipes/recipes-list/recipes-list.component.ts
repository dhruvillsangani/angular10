import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe> ();

  recipes: Recipe[] = [
    new Recipe('A test','This for testing purpose','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'),

    new Recipe('A test','This for testing purpose','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-chicken-tikka-masala-vertical-jpg-1526066425.jpg?crop=1xw:1xh;center,top&resize=480:*'),

    new Recipe('A test','This for testing purpose','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg')

  ];

  onRecipeSelected(recipe:Recipe) {

    this.recipeWasSelected.emit(recipe);

  }
  constructor() { }

  ngOnInit(): void {
  }

}

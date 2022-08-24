import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test',
      'https://aheadofourthyme.com/wp-content/uploads/2022/04/air-fryer-salmon-recipe-3.jpg'
    ),
    new Recipe(
      'Another test recipe',
      'This is a testtttttttttttt',
      'https://aheadofourthyme.com/wp-content/uploads/2022/04/air-fryer-salmon-recipe-3.jpg'
    ),
  ];

  getRecipe() {
    return this.recipes.slice(); //new reference to the recipes array
  }
  constructor() {}
}

import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
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
      'https://aheadofourthyme.com/wp-content/uploads/2022/04/air-fryer-salmon-recipe-3.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Tomato', 2)]
    ),
    new Recipe(
      'Another test recipe',
      'This is a testtttttttttttt',
      'https://aheadofourthyme.com/wp-content/uploads/2022/04/air-fryer-salmon-recipe-3.jpg',

      [
        new Ingredient('Bread', 1),
        new Ingredient('Potato', 2),
        new Ingredient('Chilly', 2),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice(); //new reference to the recipes array
  }

  addIngredientsToShoppingListService(ing: Ingredient[]) {
    this.shoppingListService.addIngredients(ing);
  }
}

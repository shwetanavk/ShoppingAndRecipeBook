import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails: Recipe;

  ingredients: Ingredient[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // this.ingredients = this.shoppingListService.getIngredients();
  }

  addIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingListService(
      this.recipeDetails.ingredients
    );
    // console.log('adding ingretengts to shoppiing list');
    // for (var val of this.recipeDetails.ingredients) {
    //   this.shoppingListService.addIngredient(val);
    // }
  }
}

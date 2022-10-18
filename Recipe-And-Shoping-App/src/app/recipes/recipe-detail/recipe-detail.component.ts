import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  // @Input()
  recipeDetails: Recipe;
  id: number;
  ingredients: Ingredient[];

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.ingredients = this.shoppingListService.getIngredients();
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeDetails = this.recipeService.getRecipe(this.id);
      console.log('recipe detail ');
      console.log(this.recipeDetails);
    });
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

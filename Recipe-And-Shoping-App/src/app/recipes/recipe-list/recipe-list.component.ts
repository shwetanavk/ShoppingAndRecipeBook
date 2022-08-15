import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

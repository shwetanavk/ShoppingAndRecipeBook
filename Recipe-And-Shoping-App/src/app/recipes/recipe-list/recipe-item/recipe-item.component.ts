import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // @Input() recipeItem: { name: string; description: string; imagePath: string };
  @Input() recipeItem: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeSelected.emit();
  }
}

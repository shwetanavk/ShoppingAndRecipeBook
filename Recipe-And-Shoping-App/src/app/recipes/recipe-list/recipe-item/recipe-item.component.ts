import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // @Input() recipeItem: { name: string; description: string; imagePath: string };
  @Input() recipeItem: Recipe;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<Recipe>();

  // constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  // onSelected() {
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipeItem);
  // }
}

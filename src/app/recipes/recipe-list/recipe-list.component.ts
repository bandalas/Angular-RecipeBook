import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A Test Recipe One', 'This is simply a test','https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Pizza_with_pineapple.jpg/1200px-Pizza_with_pineapple.jpg'),
    new Recipe('A Test Recipe Two', 'This is simply a test','https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Pizza_with_pineapple.jpg/1200px-Pizza_with_pineapple.jpg')
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}

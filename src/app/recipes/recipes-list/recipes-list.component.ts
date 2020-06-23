import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.modal';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://www.justataste.com/wp-content/uploads/2018/01/easy-beef-and-broccoli-recipe-580x875.jpg'),
    new Recipe('Another Test Recipe', 'This is a test recipe', 'https://www.justataste.com/wp-content/uploads/2018/01/easy-beef-and-broccoli-recipe-580x875.jpg')
  ];
  constructor() { }
  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

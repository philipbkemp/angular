import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

	@Output() showRecipe = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe("Beans on toast","Proper student grub","https://aucdn.ar-cdn.com/recipes/port320/ed970612-f30b-414a-a93a-322ba214e7c1.jpg"),
		new Recipe("Carbonara","Hearty pasta","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg"),
		new Recipe("Egg fried rice","Eggs, Rice, Fried","https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2020/02/Egg-Fried-Rice-2.jpg?fit=1300%2C867&ssl=1")
	];

	recipeSelected(rcp:Recipe) {
		this.showRecipe.emit(rcp);
	}

}

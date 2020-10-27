import { Component, Input } from '@angular/core';

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

	@Input() rcp:Recipe;

	constructor(
		private rcpService: RecipeService
	) {}

	addToShoppingList() {
		this.rcpService.addToShoppingList(this.rcp.ingredients);
	}

}

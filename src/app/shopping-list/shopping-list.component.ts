import { Component } from '@angular/core';

import { Ingredient } from "../shared/ingredient.model";

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

	ingredients: Ingredient[] = [
		new Ingredient("Apple",1,""),
		new Ingredient("Toast",3,"slices")
	];

	onIngredientAdded(ing:Ingredient) {
		this.ingredients.push(ing);
		console.log(this.ingredients);
	}

}

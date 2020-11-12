import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

	update= new Subject<Ingredient[]>();
	
	private ingredients: Ingredient[] = [
		new Ingredient("Apple",1,""),
		new Ingredient("Toast",3,"slices")
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(newIng: Ingredient) {
		this.ingredients.push(newIng);
		this.update.next(this.getIngredients());
	}

	addIngredients(newIngs: Ingredient[]) {
		this.ingredients.push(...newIngs);
		this.update.next(this.getIngredients());
	}

}
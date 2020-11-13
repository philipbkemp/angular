import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

	update = new Subject<Ingredient[]>();
	editing = new Subject<number>();
	
	private ingredients: Ingredient[] = [
		new Ingredient("Apple",1,""),
		new Ingredient("Toast",3,"slices")
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	getIngredientByIndex(index: number) {
		return this.ingredients[index];
	}

	addIngredient(newIng: Ingredient) {
		this.ingredients.push(newIng);
		this.update.next(this.getIngredients());
	}

	addIngredients(newIngs: Ingredient[]) {
		this.ingredients.push(...newIngs);
		this.update.next(this.getIngredients());
	}

	updateIngredient(index: number, newIng: Ingredient) {
		this.ingredients[index] = newIng;
		this.update.next(this.getIngredients());
	}

	deleteIngredient(index:number) {
		this.ingredients.splice(index,1);
		this.update.next(this.getIngredients());
	}

}
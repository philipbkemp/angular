import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

	update= new EventEmitter<Ingredient[]>();
	
	private ingredients: Ingredient[] = [
		new Ingredient("Apple",1,""),
		new Ingredient("Toast",3,"slices")
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(newIng: Ingredient) {
		this.ingredients.push(newIng);
		this.update.emit(this.getIngredients());
	}

	addIngredients(newIngs: Ingredient[]) {
		this.ingredients.push(...newIngs);
		this.update.emit(this.getIngredients());
	}

}
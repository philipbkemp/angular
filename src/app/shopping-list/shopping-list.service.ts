import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
	
	private ingredients: Ingredient[] = [
		new Ingredient("Apple",1,""),
		new Ingredient("Toast",3,"slices")
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(newIng: Ingredient) {
		this.ingredients.push(newIng);
	}

}
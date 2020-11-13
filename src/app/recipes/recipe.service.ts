import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
	providedIn: "root"
})
export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe(
			"Beans on toast","Proper student grub","https://aucdn.ar-cdn.com/recipes/port320/ed970612-f30b-414a-a93a-322ba214e7c1.jpg",
			[
				new Ingredient("Bread",2,"slices"),
				new Ingredient("Baked beans",1,"can"),
				new Ingredient("Worchesteshire sauce",1,"dash")
			]
		),
		new Recipe(
			"Carbonara","Hearty pasta","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1001491_11-2e0fa5c.jpg",
			[
				new Ingredient("Pasta",100,"g"),
				new Ingredient("Bacon",3,"rashers"),
				new Ingredient("Eggs",3,""),
				new Ingredient("Pecorino",50,"g"),
				new Ingredient("Pepper",null,null)
			]
		),
		new Recipe(
			"Egg fried rice","Eggs, Rice, Fried","https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2020/02/Egg-Fried-Rice-2.jpg?fit=1300%2C867&ssl=1",
			[
				new Ingredient("Egg",2,""),
				new Ingredient("Diced ham",50,"g"),
				new Ingredient("Peas",1,"handful"),
				new Ingredient("Rice",125,"g, cooked"),
			]
		)
	];

	constructor(
		private slService: ShoppingListService
	) {}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipeById(id: number) {
		return this.recipes[id];
	}

	addToShoppingList(rcpIngs: Ingredient[]) {
		this.slService.addIngredients(rcpIngs);
	}

}
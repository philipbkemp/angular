import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
	providedIn:"root"
})
export class DataStorageService {

	constructor(
		private http: HttpClient,
		private rcpService: RecipeService
	){}

	storeRecipes() {
		const rcps = this.rcpService.getRecipes();
		this.http.put(
			"https://ng-course-recipe-book-4f2f8-default-rtdb.europe-west1.firebasedatabase.app/recipes.json",
			rcps
		).subscribe(
			response => {
				console.log(response);
			}
		);
	}

	fetchRecipes() {
		return this.http.get<Recipe[]>(
			"https://ng-course-recipe-book-4f2f8-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
		).pipe(
			map(
				recipes => {
					console.log(recipes);
					return recipes.map(
						recipe =>{ return { ...recipe, ingredients: recipes.ingredients ? recipes.ingredients : [] } }
					);
				}
			),
			tap(recipes => {
				this.rcpService.setRecipes(recipes);
			})
		);
	}

}
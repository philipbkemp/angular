import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({
	providedIn: "root"
})
export class RecipesResolverService implements Resolve<Recipe[]> {

	constructor(
		private dataSS: DataStorageService,
		private rcpService: RecipeService
	) {}

	resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
		const rcps = this.rcpService.getRecipes();
		if ( rcps.length === 0 ) {
			return this.dataSS.fetchRecipes();
		} else {
			return rcps;
		}
	}

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

	rcp: Recipe;
	id: number;

	constructor(
		private rcpService: RecipeService,
		private route: ActivatedRoute,
	) {}

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = +params["id"];
				this.rcp = this.rcpService.getRecipeById(this.id);
			}
		);
	}

	addToShoppingList() {
		this.rcpService.addToShoppingList(this.rcp.ingredients);
	}

}

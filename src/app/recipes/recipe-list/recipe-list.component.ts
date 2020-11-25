import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnDestroy, OnInit {

	recipes: Recipe[];

	rcpSubscription: Subscription;

	constructor(
		private rcpService: RecipeService,
		private router: Router,
		private route: ActivatedRoute,
	) {}

	ngOnInit() {
		this.rcpSubscription = this.rcpService.recipesChanged.subscribe(
			(rcps: Recipe[]) => {
				this.recipes = rcps;
			}
		);
		this.recipes = this.rcpService.getRecipes();
	}

	ngOnDestroy() {
		this.rcpSubscription.unsubscribe();

	}

	onNewRecipe() {
		this.router.navigate(["new"],{relativeTo:this.route});
	}

}

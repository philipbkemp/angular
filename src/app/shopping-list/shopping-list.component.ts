import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

	ingredients: Ingredient[];

	private sub_ingChange: Subscription;

	constructor(
		private slService: ShoppingListService
		) {}

	ngOnInit() {
		this.ingredients = this.slService.getIngredients();
		this.sub_ingChange = this.slService.update
			.subscribe(
				(updatedIngredients: Ingredient[]) => {
					this.ingredients = updatedIngredients;
				}
			);
	}

	ngOnDestroy() {
		this.sub_ingChange.unsubscribe();
	}

}

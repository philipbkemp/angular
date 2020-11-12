import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

	constructor(
		private slService: ShoppingListService
		) {}

	onAddItem(form: NgForm) {
		const values = form.value;
		const newIng = new Ingredient(
			values.name,
			values.qty,
			values.unit
		);
		this.slService.addIngredient(newIng);		
	}

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

	sub_editing: Subscription;
	isEditing = false;
	itemBeingEdited: number;

	constructor(
		private slService: ShoppingListService
	) {}

	ngOnInit() {
		this.sub_editing = this.slService.editing.subscribe(
			(index: number) => {
				this.isEditing = true;
				this.itemBeingEdited = index;
			}
		);
	}

	ngOnDestroy() {
		this.sub_editing.unsubscribe();
	}

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

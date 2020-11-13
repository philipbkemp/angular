import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
	editItemIndex: number;
	itemBeingEdited: Ingredient;

	@ViewChild("f",{static:false}) slForm: NgForm;

	constructor(
		private slService: ShoppingListService
	) {}

	ngOnInit() {
		this.sub_editing = this.slService.editing.subscribe(
			(index: number) => {

				this.isEditing = true;
				this.editItemIndex = index;
				this.itemBeingEdited = this.slService.getIngredientByIndex(this.editItemIndex);

				this.slForm.setValue({
					name: this.itemBeingEdited.name,
					qty: this.itemBeingEdited.qty,
					unit: this.itemBeingEdited.unit
				});

			}
		);
	}

	ngOnDestroy() {
		this.sub_editing.unsubscribe();
	}

	onSubmitItem() {

		const values = this.slForm.value;
		const newIng = new Ingredient(
			values.name,
			values.qty,
			values.unit
		);

		if ( ! this.isEditing ) {
			this.slService.addIngredient(newIng);	
		} else {
			this.slService.updateIngredient(this.editItemIndex,newIng);	
		}

		this.doReset();

	}

	doReset() {

		this.isEditing = false;
		this.editItemIndex = null;
		this.itemBeingEdited = null;
		this.slForm.reset();

	}

	doDelete() {

		this.slService.deleteIngredient(this.editItemIndex);
		this.doReset();

	}

}

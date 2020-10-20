import { Component, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

	@ViewChild("nameInput", {static:false}) nameInputRef: ElementRef;
	@ViewChild("qtyInput", {static:false}) qtyInputRef: ElementRef;
	@ViewChild("unitInput", {static:false}) unitInputRef: ElementRef;

	constructor(
		private slService: ShoppingListService
		) {}

	onAddItem() {
		const newIng = new Ingredient(
			this.nameInputRef.nativeElement.value,
			this.qtyInputRef.nativeElement.value,
			this.unitInputRef.nativeElement.value
		);
		this.slService.addIngredient(newIng);		
	}

}

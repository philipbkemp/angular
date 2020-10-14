import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { Ingredient } from "../../shared/ingredient.model";

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	@Output() newIngredient = new EventEmitter<Ingredient>();
	@ViewChild("nameInput", {static:false}) nameInputRef: ElementRef;
	@ViewChild("qtyInput", {static:false}) qtyInputRef: ElementRef;
	@ViewChild("unitInput", {static:false}) unitInputRef: ElementRef;

	onAddItem() {
		const newIng = new Ingredient(
			this.nameInputRef.nativeElement.value,
			this.qtyInputRef.nativeElement.value,
			this.unitInputRef.nativeElement.value
		);
		this.newIngredient.emit(newIng);
	}

}

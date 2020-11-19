import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";

import { RecipeService } from "../recipe.service";

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

	id: number;
	editMode = false;

	recipeForm: FormGroup;

	constructor(
		private route: ActivatedRoute,
		private rcpService: RecipeService
	) { }

	ngOnInit() {
		this.route.params.subscribe(
			(params: Params) => {
				this.id = +params["id"];
				this.editMode = ( params["id"] != null );
				this.initForm();
			}
		);
	}

	private initForm() {
		let rcpName = "";
		let imagePath = "";
		let description = "";
		let ingredients = new FormArray([]);

		if ( this.editMode ) {
			const rcp = this.rcpService.getRecipeById(this.id);
			rcpName = rcp.name;
			imagePath = rcp.imagePath;
			description = rcp.description;
			if ( rcp["ingredients"] ) {
				for ( let i of rcp.ingredients ) {
					ingredients.push(
						new FormGroup({
							"name": new FormControl(i.name),
							"qty": new FormControl(i.qty),
							"unit": new FormControl(i.unit)
						})
					);
				}
			}
		}

		this.recipeForm = new FormGroup({
			"name": new FormControl(rcpName),
			"imagePath": new FormControl(imagePath),
			"description": new FormControl(description),
			"ingredients": ingredients
		});
	}

	onSubmit() {
		console.log(this.recipeForm);
	}

}

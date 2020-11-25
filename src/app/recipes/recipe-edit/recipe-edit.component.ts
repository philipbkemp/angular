import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";

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
		private rcpService: RecipeService,
		private router: Router
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
							"name": new FormControl( i.name, Validators.required ),
							"qty": new FormControl( i.qty, Validators.pattern(/^[0-9]+(\.[0-9][0-9]?)?$/) ),
							"unit": new FormControl( i.unit )
						})
					);
				}
			}
		}

		this.recipeForm = new FormGroup({
			"name": new FormControl( rcpName, Validators.required ),
			"imagePath": new FormControl( imagePath, Validators.required ),
			"description": new FormControl( description, Validators.required ),
			"ingredients": ingredients
		});
	}

	onSubmit() {
		
		if ( this.editMode ) {
			this.rcpService.updateRecipe(this.id,this.recipeForm.value);
		} else {
			this.rcpService.addRecipe(this.recipeForm.value);
		}

		this.onGoAway();

	}

	onAddIngredient() {
		(<FormArray> this.recipeForm.get("ingredients")).push(
			new FormGroup({
				"name": new FormControl( null, Validators.required ),
				"qty": new FormControl( null, Validators.pattern(/^[0-9]+(\.[0-9][0-9]?)?$/) ),
				"unit": new FormControl( null )
			})
		)
	}

	get controls() {
		return (<FormArray>this.recipeForm.get("ingredients")).controls;
	}

	onGoAway() {
		this.router.navigate(["../"],{relativeTo: this.route});
	}

	onDeleteIngredient(index:number) {
		(<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
	}

}

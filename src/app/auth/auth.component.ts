import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
	selector: "app-auth",
	templateUrl: "./auth.component.html",
	styleUrls: ['./auth.component.css']
})
export class AuthComponent {

	modeLogin = true;

	onSwitchMode() {
		this.modeLogin = ! this.modeLogin;
	}

	onSubmit(form: NgForm) {

		let formOk = true;

		if ( form.value.password2 ) {
			formOk = (form.value.password === form.value.password2);
			if ( ! formOk ) {
				form.controls["password2"].setErrors({"invalid":true});
			}
		}

		if ( formOk ) {
			console.log(form.value);
			form.reset();
		}
	}

}
import { Component } from "@angular/core";

@Component({
	selector: "app-auth",
	templateUrl: "./auth.component.html"
})
export class AuthComponent {

	modeLogin = true;

	onSwitchMode() {
		this.modeLogin = ! this.modeLogin;
	}

}
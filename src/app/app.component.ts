import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	loadedMode = "rcp";

	onNavigate(mode:string) {
		this.loadedMode = mode;
	}

}

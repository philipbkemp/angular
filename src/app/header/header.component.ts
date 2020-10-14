import { Component,EventEmitter, Output } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html"
})
export class HeaderComponent {
	
	@Output() modeSelected = new EventEmitter<string>();

	onSelect(mode:string) {
		this.modeSelected.emit(mode);
	}

}
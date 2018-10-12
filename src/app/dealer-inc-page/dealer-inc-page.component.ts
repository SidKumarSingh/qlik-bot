import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './dealer-inc-page.component.html',
  styleUrls: ['./dealer-inc-page.component.css']
})
export class DealerIncPageComponent {

	constructor (private _navigator: OnsNavigator) {};

	summPage() {
		this._navigator.element.popPage();
	}  

}

import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './dealer-sales-page.component.html',
  styleUrls: ['./dealer-sales-page.component.css']
})
export class DealerSalesPageComponent {

	constructor (private _navigator: OnsNavigator) {};

	summPage() {
		this._navigator.element.popPage();
	}

}
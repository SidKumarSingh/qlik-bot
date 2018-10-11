import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './dealer-act-page.component.html',
  styleUrls: ['./dealer-act-page.component.css']
})
export class DealerActPageComponent {

	constructor (private _navigator: OnsNavigator) {};

	summPage() {
		this._navigator.element.popPage();
	}

}

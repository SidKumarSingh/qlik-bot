import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { DealerPageComponent } from '../dealer-page/dealer-page.component';


@Component({
  selector: 'ons-page',
  templateUrl: './dealer-list-page.component.html',
  styleUrls: ['./dealer-list-page.component.css']
})
export class DealerListPageComponent {

	constructor(private _navigator: OnsNavigator) { }

	dealerPage() {
	  	this._navigator.element.pushPage(DealerPageComponent);
	}

	summPage() {
		this._navigator.element.popPage();
	}

}

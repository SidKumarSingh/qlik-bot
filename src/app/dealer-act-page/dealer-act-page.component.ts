import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { GlobalsService } from '../globals.service';

@Component({
  selector: 'ons-page',
  templateUrl: './dealer-act-page.component.html',
  styleUrls: ['./dealer-act-page.component.css']
})
export class DealerActPageComponent {

	constructor (private _navigator: OnsNavigator, private globals: GlobalsService) { };

	summPage() {
		this._navigator.element.popPage();
	}

}

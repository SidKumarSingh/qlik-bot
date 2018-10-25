import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { HomePageComponent } from '../home-page/home-page.component';
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

	homePage() {
		this.globals.showSalesSumm = false;
		this.globals.showDealer = false;
		this._navigator.element.resetToPage(HomePageComponent,{pop: true});
	}

	get markComplete() {
		return this.globals.markComplete;
	}

	set markComplete(val: boolean) {
		this.globals.markComplete = val;
	}

}

import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { HomePageComponent } from '../home-page/home-page.component';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'ons-page',
  templateUrl: './dealer-sales-page.component.html',
  styleUrls: ['./dealer-sales-page.component.css']
})
export class DealerSalesPageComponent {

	constructor (private _navigator: OnsNavigator, private globals: GlobalsService) {};

	summPage() {
		this._navigator.element.popPage();
	}

	homePage() {
		this.globals.showSalesSumm = false;
		this.globals.showDealer = false;
		this._navigator.element.resetToPage(HomePageComponent,{pop: true});
	}

}

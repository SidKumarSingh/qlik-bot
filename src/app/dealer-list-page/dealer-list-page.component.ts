import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { DealerPageComponent } from '../dealer-page/dealer-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'ons-page',
  templateUrl: './dealer-list-page.component.html',
  styleUrls: ['./dealer-list-page.component.css']
})
export class DealerListPageComponent {

	constructor(private _navigator: OnsNavigator, private globals: GlobalsService) { }

	dealerPage() {
	  	this._navigator.element.pushPage(DealerPageComponent);
	}

	summPage() {
		this._navigator.element.popPage();
	}

	homePage() {
		this.globals.showSalesSumm = false;
		this.globals.showDealer = false;
		this._navigator.element.resetToPage(HomePageComponent,{pop: true});
	}

}

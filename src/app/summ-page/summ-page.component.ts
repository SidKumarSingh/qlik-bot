import { Component } from '@angular/core';
import { DealerPageComponent } from '../dealer-page/dealer-page.component';
import { DealerListPageComponent } from '../dealer-list-page/dealer-list-page.component';

import { OnsNavigator } from 'ngx-onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './summ-page.component.html',
  styleUrls: ['./summ-page.component.css']
})
export class SummPageComponent {

  constructor (private _navigator: OnsNavigator) {};

	showSalesSumm: boolean = false;
  showDealer: boolean = false;

  showSales() {
    this.showSalesSumm = true;
	}

	showDealerAct() {
		this.showDealer = true;
	}

  dealerPage() {
  	this._navigator.element.pushPage(DealerPageComponent);
  }

  dealerList() {
    this._navigator.element.pushPage(DealerListPageComponent);
  }

}

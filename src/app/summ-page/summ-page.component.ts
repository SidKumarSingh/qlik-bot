import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { DealerPageComponent } from '../dealer-page/dealer-page.component';
import { DealerListPageComponent } from '../dealer-list-page/dealer-list-page.component';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'ons-page',
  templateUrl: './summ-page.component.html',
  styleUrls: ['./summ-page.component.css']
})
export class SummPageComponent {

  constructor (private _navigator: OnsNavigator, private globals: GlobalsService) { };

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

  get markComplete(): boolean {
    return this.globals.markComplete;
  }

}

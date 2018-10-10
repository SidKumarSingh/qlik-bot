import { Component } from '@angular/core';
import { DealerSummPageComponent } from '../dealer-summ-page/dealer-summ-page.component';
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
  	this._navigator.element.pushPage(DealerSummPageComponent);
  }

}

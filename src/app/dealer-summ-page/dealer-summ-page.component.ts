import { Component} from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { DealerSalesPageComponent } from '../dealer-sales-page/dealer-sales-page.component';

@Component({
  selector: 'ons-page',
  templateUrl: './dealer-summ-page.component.html',
  styleUrls: ['./dealer-summ-page.component.css']
})
export class DealerSummPageComponent {

	constructor (private _navigator: OnsNavigator) {};

	summPage() {
		this._navigator.element.popPage();
	}

}

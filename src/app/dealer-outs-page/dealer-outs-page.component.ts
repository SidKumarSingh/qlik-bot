import { Component } from '@angular/core';

import { OnsNavigator } from 'ngx-onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './dealer-outs-page.component.html',
  styleUrls: ['./dealer-outs-page.component.css']
})
export class DealerOutsPageComponent {

	constructor (private _navigator: OnsNavigator) {};

	selectedBucket: string = '2';
		
	buckets = [
		{value: '0', label: '30 days', amt: '24,43,149.64'},
	    {value: '1', label: '60 days', amt: '23,28,000.49'},
	    {value: '2', label: '90 days', amt: '17,82,346.13'},
	    {value: '3', label: '180 days', amt: '8,53,318.11'},
	    {value: '4', label: '365 days', amt: '24,602.67'},
	    {value: '5', label: '545 days', amt: '0'},
	    {value: '6', label: '731 days', amt: '0'}
	];

	summPage() {
		this._navigator.element.popPage();
	}
  
}

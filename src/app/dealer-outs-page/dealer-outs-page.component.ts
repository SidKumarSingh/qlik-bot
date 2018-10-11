import { Component } from '@angular/core';
import { OnsNavigator, ViewChild } from 'ngx-onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './dealer-outs-page.component.html',
  styleUrls: ['./dealer-outs-page.component.css']
})
export class DealerOutsPageComponent {

	constructor (private _navigator: OnsNavigator) {};

	@ViewChild('carousel') carousel;

	selectedBucket: string = 'os3';
	buckets = [
		{value: 'os1', label: '1 - 30 days'},
	    {value: 'material', label: 'Material'},
	    {value: 'underbar', label: 'Underbar'}
	];

	prevBucket() {
		this.carousel.nativeElement.prev();
	}

	nextBucket() {
		this.carousel.nativeElement.next();
	}

	summPage() {
		this._navigator.element.popPage();
	}
  
}

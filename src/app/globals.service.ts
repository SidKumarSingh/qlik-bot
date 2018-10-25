import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {

	private isLoggedin: boolean = false;
	private _markComplete: boolean = false;
	private _showDealer: boolean = false;
	private _showSalesSumm: boolean = false;

	get showDealer() {
		return this._showDealer;
	}

	set showDealer(val: boolean) {
		this._showDealer = val;
	}

	get showSalesSumm() {
		return this._showSalesSumm;
	}

	set showSalesSumm(val: boolean) {
		this._showSalesSumm = val;
	}

	get markComplete() {
		return this._markComplete;
	}

	set markComplete(val: boolean) {
		this._markComplete = val;
	}

}

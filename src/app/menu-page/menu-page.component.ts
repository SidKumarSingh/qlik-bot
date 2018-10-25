import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { GlobalsService } from '../globals.service';

@Component({
  selector: 'ons-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent {

  constructor(private _navigator: OnsNavigator, private globals: GlobalsService) { }

  logout() {
  	this.globals.showSalesSumm = false;
	this.globals.showDealer = false;
  	this._navigator.element.popPage();
  }

}

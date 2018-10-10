import { Component } from '@angular/core';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './summ-page.component.html',
  styleUrls: ['./summ-page.component.css']
})
export class SummPageComponent {

  showSalesSumm: boolean = false;
  showDealer: boolean = false;

  showSales() {
  	this.showSalesSumm = true;
  }

  showDealerAct() {
  	this.showDealer = true;
  }

}

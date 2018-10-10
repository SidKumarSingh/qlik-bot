import { Component } from '@angular/core';
//import { LoginPageComponent } from './login-page/login-page.component';
import {DealerSummPageComponent } from './dealer-summ-page/dealer-summ-page.component';
import {DealerSalesPageComponent } from './dealer-sales-page/dealer-sales-page.component';
import {DealerOutsPageComponent } from './dealer-outs-page/dealer-outs-page.component';
import {DealerIncPageComponent } from './dealer-inc-page/dealer-inc-page.component';
import { OnsNavigator } from 'ngx-onsenui';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialPage = DealerSummPageComponent;
  tab1 = DealerSummPageComponent;
  tab2 = DealerSalesPageComponent;
  tab3 = DealerOutsPageComponent;
  tab4 = DealerIncPageComponent;
}
